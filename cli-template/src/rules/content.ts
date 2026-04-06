import { Finding } from "../reporter";

export class ContentRules {
  static audit(file: string, content: string): Finding[] {
    const findings: Finding[] = [];

    // Strip markdown formatting
    const plainText = content
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/`[^`]+`/g, "")
      .replace(/```[\s\S]*?```/g, "");

    const sentences = plainText.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = plainText.split(/\s+/).filter(w => w.length > 0);

    // Average sentence length
    if (sentences.length > 0) {
      const avgWords = words.length / sentences.length;
      if (avgWords > 25) {
        findings.push({
          file, rule: "sentence-length", severity: "warning",
          message: `Average sentence length is ${avgWords.toFixed(1)} words (recommended: under 20)`,
          suggestion: "Break long sentences into shorter ones for better comprehension",
        });
      }
    }

    // Long paragraphs
    const paragraphs = content.split(/\n\s*\n/).filter(p => p.trim().length > 0);
    for (let i = 0; i < paragraphs.length; i++) {
      const paraWords = paragraphs[i].split(/\s+/).length;
      if (paraWords > 150) {
        findings.push({
          file, rule: "paragraph-length", severity: "warning",
          message: `Paragraph ${i + 1} has ${paraWords} words (recommended: under 100)`,
          suggestion: "Break long paragraphs into smaller chunks with subheadings",
        });
      }
    }

    // Complex words (10+ chars as proxy for multi-syllable)
    const complexWords = words.filter(w => w.length > 10 && /^[a-zA-Z]+$/.test(w));
    if (words.length > 50) {
      const ratio = complexWords.length / words.length;
      if (ratio > 0.1) {
        findings.push({
          file, rule: "word-complexity", severity: "info",
          message: `${(ratio * 100).toFixed(1)}% of words are complex (10+ characters)`,
          suggestion: "Consider using simpler vocabulary or providing a glossary",
        });
      }
    }

    // Wall of text without headings
    if (words.length > 200 && !content.match(/^#{1,6}\s/m) && !content.match(/<h[1-6]/i)) {
      findings.push({
        file, rule: "use-headings", severity: "warning",
        message: "Long content without headings is difficult to navigate for dyslexic readers",
        suggestion: "Add headings to break content into scannable sections",
      });
    }

    // ALL CAPS blocks
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.length > 15 && line === line.toUpperCase() && /[A-Z]/.test(line) && !/^[#\-*|=]/.test(line)) {
        findings.push({
          file, line: i + 1, rule: "no-all-caps", severity: "warning",
          message: "All-caps text blocks are harder to read for dyslexic users",
          suggestion: "Use sentence case with emphasis (bold) instead",
        });
      }
    }

    return findings;
  }
}
