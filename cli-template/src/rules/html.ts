import { Finding } from "../reporter";

export class HtmlRules {
  static audit(file: string, content: string): Finding[] {
    const findings: Finding[] = [];
    const lines = content.split("\n");

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const ln = i + 1;

      // Inline justified text
      if (/style\s*=\s*["'][^"']*text-align\s*:\s*justify/i.test(line)) {
        findings.push({
          file, line: ln, rule: "no-justified-text", severity: "error",
          message: "Inline justified text is very difficult for dyslexic readers",
          suggestion: "Use text-align: left",
        });
      }

      // Marquee / scrolling text
      if (/<marquee/i.test(line)) {
        findings.push({
          file, line: ln, rule: "no-moving-text", severity: "error",
          message: "Moving/scrolling text is extremely difficult for dyslexic readers to track",
          suggestion: "Use static text instead",
        });
      }

      // Images without alt text
      if (/<img\b/i.test(line) && !line.includes("alt=")) {
        findings.push({
          file, line: ln, rule: "img-alt-text", severity: "warning",
          message: "Images should have alt text to support multiple learning channels",
          suggestion: "Add descriptive alt text to all images",
        });
      }

      // ALL CAPS headings
      const headingMatch = line.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/i);
      if (headingMatch) {
        const text = headingMatch[1];
        if (text === text.toUpperCase() && text.length > 10 && /[A-Z]/.test(text)) {
          findings.push({
            file, line: ln, rule: "no-all-caps", severity: "warning",
            message: "All-caps headings are harder to read for dyslexic users",
            suggestion: "Use CSS text-transform instead of literal uppercase",
          });
        }
      }

      // Blinking or animation
      if (/<blink/i.test(line) || /animation\s*:/i.test(line)) {
        findings.push({
          file, line: ln, rule: "no-distracting-animation", severity: "warning",
          message: "Blinking or animated text can be distracting for dyslexic readers",
          suggestion: "Provide prefers-reduced-motion support",
        });
      }
    }

    // Missing lang attribute
    if (content.includes("<html") && !/<html[^>]*lang\s*=/i.test(content)) {
      findings.push({
        file, rule: "html-lang", severity: "warning",
        message: "Missing lang attribute on <html> element",
        suggestion: "Add lang attribute for screen readers and text-to-speech tools",
      });
    }

    return findings;
  }
}
