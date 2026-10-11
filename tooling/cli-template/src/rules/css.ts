import { Finding } from "../reporter";

export class CssRules {
  static audit(file: string, content: string): Finding[] {
    const findings: Finding[] = [];
    const lines = content.split("\n");

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const ln = i + 1;

      // Serif fonts reduce readability for dyslexic users
      if (/font-family\s*:.*\b(Times|Georgia|Garamond|Palatino|serif)\b/i.test(line) &&
          !/sans-serif/i.test(line)) {
        findings.push({
          file, line: ln, rule: "no-serif-fonts", severity: "warning",
          message: "Serif fonts reduce readability for dyslexic users",
          suggestion: "Use sans-serif fonts like OpenDyslexic, Lexie Readable, Arial, or Verdana",
        });
      }

      // Justified text creates uneven spacing
      if (/text-align\s*:\s*justify/i.test(line)) {
        findings.push({
          file, line: ln, rule: "no-justified-text", severity: "error",
          message: "Justified text creates uneven spacing that is very difficult for dyslexic readers",
          suggestion: "Use text-align: left instead",
        });
      }

      // Small font sizes
      const fsMatch = line.match(/font-size\s*:\s*(\d+(?:\.\d+)?)(px|pt|em|rem)/i);
      if (fsMatch) {
        const size = parseFloat(fsMatch[1]);
        const unit = fsMatch[2].toLowerCase();
        if ((unit === "px" && size < 14) || (unit === "pt" && size < 12) ||
            ((unit === "em" || unit === "rem") && size < 0.875)) {
          findings.push({
            file, line: ln, rule: "min-font-size", severity: "warning",
            message: `Font size ${size}${unit} is below recommended minimum for dyslexic readers`,
            suggestion: "Use at least 14px / 12pt / 0.875rem as a minimum font size",
          });
        }
      }

      // Insufficient line-height
      const lhMatch = line.match(/line-height\s*:\s*(\d+(?:\.\d+)?)/);
      if (lhMatch) {
        const lh = parseFloat(lhMatch[1]);
        if (lh > 0 && lh < 1.5) {
          findings.push({
            file, line: ln, rule: "min-line-height", severity: "warning",
            message: `Line-height ${lh} is below 1.5 recommended minimum for dyslexic readers`,
            suggestion: "Use line-height of at least 1.5 (1.8 recommended)",
          });
        }
      }

      // All-uppercase text
      if (/text-transform\s*:\s*uppercase/i.test(line)) {
        findings.push({
          file, line: ln, rule: "no-all-caps", severity: "warning",
          message: "ALL CAPS text is harder to read for dyslexic users (uniform word shapes)",
          suggestion: "Use font-variant: small-caps if emphasis is needed",
        });
      }

      // Italic text
      if (/font-style\s*:\s*italic/i.test(line)) {
        findings.push({
          file, line: ln, rule: "limit-italics", severity: "info",
          message: "Italic text can be harder to read for dyslexic users",
          suggestion: "Use bold or color for emphasis instead of italics",
        });
      }

      // Negative letter-spacing
      const lsMatch = line.match(/letter-spacing\s*:\s*(-?\d+(?:\.\d+)?)(px|em)/i);
      if (lsMatch && parseFloat(lsMatch[1]) < 0) {
        findings.push({
          file, line: ln, rule: "no-tight-spacing", severity: "error",
          message: "Negative letter-spacing makes text very difficult for dyslexic readers",
          suggestion: "Use letter-spacing of at least 0.05em for improved readability",
        });
      }

      // Very long max-width
      const mwMatch = line.match(/max-width\s*:\s*(\d+)(ch|px)/i);
      if (mwMatch) {
        const val = parseInt(mwMatch[1]);
        const u = mwMatch[2].toLowerCase();
        if ((u === "ch" && val > 80) || (u === "px" && val > 800)) {
          findings.push({
            file, line: ln, rule: "max-line-length", severity: "info",
            message: `Line length (${val}${u}) may be too wide for comfortable reading`,
            suggestion: "Keep line length under 70-80 characters (60-70ch)",
          });
        }
      }
    }

    return findings;
  }
}
