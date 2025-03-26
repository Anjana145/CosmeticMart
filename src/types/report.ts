export interface OverallReport {
    total_issues: number;
    resolved_issues: number;
    unresolved_issues: number;
    issues_by_category: Record<string, number>;
  }
  
  export interface Issue {
    id: string;
    title: string;
    description: string;
    severity: 'Critical' | 'High' | 'Medium' | 'Low';
    category: string;
    resolved: boolean;
  }
  
  export interface DeveloperReportCategory {
    category: string;
    issues: Issue[];
  }