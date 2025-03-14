export const strings = {
  ice: {
    title: "ICE Score Calculator",
    description: "Score features based on Impact, Confidence, and Ease using the ICE framework",
    impact: {
      label: "Impact",
      description: "How much will this feature benefit users/business?",
      levels: {
        9: "Game-changing feature that transforms the product",
        7: "Major improvement to core functionality",
        5: "Significant feature enhancement",
        3: "Minor improvement to existing features",
        1: "Minimal impact on user experience"
      }
    },
    confidence: {
      label: "Confidence",
      description: "How confident are you in your impact assessment?",
      levels: {
        9: "Extensive data and research supports this",
        7: "Strong confidence based on user feedback",
        5: "Moderate confidence in impact",
        3: "Some uncertainty in assessment",
        1: "Limited data to support impact"
      }
    },
    ease: {
      label: "Ease",
      description: "How easy is it to implement this feature?",
      levels: {
        9: "Very quick implementation, minimal complexity",
        7: "Straightforward implementation",
        5: "Moderate development effort required",
        3: "Complex implementation, significant effort",
        1: "Very complex, requires extensive resources"
      }
    },
    priorities: {
      mustHave: {
        label: "Must Have",
        range: "Score 70+",
        description: "High-impact feature with high confidence and ease of implementation"
      },
      highImpact: {
        label: "High Impact",
        range: "Score 45-69",
        description: "Important feature that should be prioritized"
      },
      medium: {
        label: "Medium",
        range: "Score 25-44",
        description: "Valuable feature to consider for upcoming sprints"
      },
      low: {
        label: "Low Priority",
        range: "Score 0-24",
        description: "Feature to revisit when higher priorities are completed"
      }
    }
  },
  bugs: {
    title: "Bug Priority Calculator",
    description: "Score bugs based on their Impact and Likelihood of occurring",
    impact: {
      label: "Impact",
      description: "How severe is the bug's impact on users or business?",
      levels: {
        9: "Critical system failure or data loss",
        7: "Major functionality broken",
        5: "Significant user experience issues",
        3: "Minor annoyance but workable",
        1: "Barely noticeable issue"
      }
    },
    likelihood: {
      label: "Likelihood",
      description: "How often does this bug occur?",
      levels: {
        9: "Affects all users consistently",
        7: "Affects majority of users (>70%)",
        5: "Affects many users (~50%)",
        3: "Affects small group of users (<30%)",
        1: "Rare occurrence (<1% of users)"
      }
    },
    priorities: {
      critical: {
        label: "Critical",
        range: "Impact 9-10 or Score 70+",
        description: "Severe impact on business/users, needs immediate attention"
      },
      high: {
        label: "High",
        range: "Score 45-69",
        description: "Significant impact, should be fixed in next release"
      },
      medium: {
        label: "Medium",
        range: "Score 25-44",
        description: "Moderate impact, plan to fix soon"
      },
      low: {
        label: "Low",
        range: "Score 0-24",
        description: "Minor impact, fix when convenient"
      }
    }
  }
} 