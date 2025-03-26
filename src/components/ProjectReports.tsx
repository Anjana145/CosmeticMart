import { useState, useEffect } from "react";
import { 
  BarChart3, 
  ListChecks, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Shield,
  Zap,
  Info,
  Loader2,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { fetchReport } from "../services/api";
import type { OverallReport, DeveloperReportCategory, Issue } from "../types/report";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "SEO":
      return <Search className="w-6 h-6 text-blue-500" />;
    case "Security":
      return <Shield className="w-6 h-6 text-red-500" />;
    case "Performance":
      return <Zap className="w-6 h-6 text-yellow-500" />;
    default:
      return <Info className="w-6 h-6 text-gray-500" />;
  }
};

const getSeverityDetails = (severity: string) => {
  switch (severity) {
    case "Critical":
      return {
        icon: <AlertCircle className="w-4 h-4" />,
        color: "bg-red-100 text-red-800",
        borderColor: "border-red-200",
        badge: "bg-red-500 text-white"
      };
    case "High":
      return {
        icon: <AlertTriangle className="w-4 h-4" />,
        color: "bg-orange-100 text-orange-800",
        borderColor: "border-orange-200",
        badge: "bg-orange-500 text-white"
      };
    case "Medium":
      return {
        icon: <AlertTriangle className="w-4 h-4" />,
        color: "bg-yellow-100 text-yellow-800",
        borderColor: "border-yellow-200",
        badge: "bg-yellow-500 text-white"
      };
    case "Low":
      return {
        icon: <Info className="w-4 h-4" />,
        color: "bg-green-100 text-green-800",
        borderColor: "border-green-200",
        badge: "bg-green-500 text-white"
      };
    default:
      return {
        icon: <Info className="w-4 h-4" />,
        color: "bg-gray-100 text-gray-800",
        borderColor: "border-gray-200",
        badge: "bg-gray-500 text-white"
      };
  }
};

const IssueCard = ({ issue }: { issue: Issue }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const severityStyle = getSeverityDetails(issue.severity);

  return (
    <div className={`mb-4 border rounded-lg ${severityStyle.borderColor} bg-white transition-all duration-200 hover:shadow-md`}>
      <div 
        className="p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {getCategoryIcon(issue.category)}
              <h3 className="text-lg font-medium text-gray-900">{issue.title}</h3>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${severityStyle.badge}`}>
                {severityStyle.icon}
                {issue.severity}
              </span>
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                issue.resolved 
                  ? "bg-green-500 text-white" 
                  : "bg-red-500 text-white"
              }`}>
                {issue.resolved ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                {issue.resolved ? "Resolved" : "Unresolved"}
              </span>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Last updated: {new Date().toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm text-gray-600">{issue.description}</p>
          </div>
          <button className="ml-4 text-gray-400 hover:text-gray-600 transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900">Impact Analysis</h4>
                <p className="text-sm text-gray-600">
                  This issue affects website performance and user experience.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900">Recommended Action</h4>
                <p className="text-sm text-gray-600">
                  Implement immediate fixes following security best practices.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CategorySummaryCard = ({ category, count, trend }: { category: string; count: number; trend: 'up' | 'down' | 'neutral' }) => {
  return (
    <div className="bg-white border rounded-lg p-4 transition-all duration-200 hover:shadow-md">
      <div className="flex items-center gap-3 mb-2">
        {getCategoryIcon(category)}
        <h4 className="font-medium text-gray-900">{category}</h4>
      </div>
      <div className="flex items-end gap-2">
        <p className="text-2xl font-bold text-gray-900">{count}</p>
        <div className={`flex items-center ${
          trend === 'up' ? 'text-red-500' : 
          trend === 'down' ? 'text-green-500' : 
          'text-gray-500'
        }`}>
          {trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> :
           trend === 'down' ? <ArrowDownRight className="w-4 h-4" /> :
           null}
          <span className="text-sm">
            {trend === 'up' ? '+15%' :
             trend === 'down' ? '-10%' :
             'No change'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function ProjectReports() {
  const [activeTab, setActiveTab] = useState<"overall" | "developer">("overall");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [overallReport, setOverallReport] = useState<OverallReport | null>(null);
  const [developerReport, setDeveloperReport] = useState<DeveloperReportCategory[] | null>(null);

  useEffect(() => {
    const loadReport = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchReport(activeTab);
        if (activeTab === 'overall') {
          setOverallReport(data as OverallReport);
        } else {
          setDeveloperReport(data as DeveloperReportCategory[]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadReport();
  }, [activeTab]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading report data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center">
            <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
            <div>
              <h3 className="text-lg font-medium text-red-800">Error Loading Report</h3>
              <p className="text-red-700 mt-1">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Project Health Dashboard</h1>
        <p className="mt-2 text-gray-600">Monitor and analyze your project's health metrics</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-8">
        <div className="border-b">
          <div className="flex space-x-8 px-6">
            <button
              className={`py-4 px-4 flex items-center gap-2 font-medium text-sm transition-colors duration-200 relative ${
                activeTab === "overall"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("overall")}
            >
              <BarChart3 className="w-5 h-5" />
              Overall Summary
            </button>
            <button
              className={`py-4 px-4 flex items-center gap-2 font-medium text-sm transition-colors duration-200 relative ${
                activeTab === "developer"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("developer")}
            >
              <ListChecks className="w-5 h-5" />
              Detailed Report
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === "overall" && overallReport && (
            <div className="space-y-8">
              {/* Summary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Issues</p>
                      <p className="text-3xl font-bold text-gray-900">{overallReport.total_issues}</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-600">Resolved</p>
                      <p className="text-3xl font-bold text-green-700">{overallReport.resolved_issues}</p>
                    </div>
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-red-600">Unresolved</p>
                      <p className="text-3xl font-bold text-red-700">{overallReport.unresolved_issues}</p>
                    </div>
                    <AlertCircle className="w-8 h-8 text-red-500" />
                  </div>
                </div>
              </div>

              {/* Category Breakdown */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Issues by Category</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(overallReport.issues_by_category).map(([category, count], index) => (
                    <CategorySummaryCard 
                      key={category} 
                      category={category} 
                      count={count}
                      trend={index % 3 === 0 ? 'up' : index % 3 === 1 ? 'down' : 'neutral'}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "developer" && developerReport && (
            <div>
              {/* Category Filter */}
              <div className="mb-6">
                <div className="flex gap-4 mb-4 flex-wrap">
                  <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      !selectedCategory
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Categories
                  </button>
                  {developerReport.map(category => (
                    <button
                      key={category.category}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.category
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                      onClick={() => setSelectedCategory(category.category)}
                    >
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(category.category)}
                        <span>{category.category}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Issues List */}
              <div className="space-y-8">
                {developerReport
                  .filter(category => !selectedCategory || category.category === selectedCategory)
                  .map(category => (
                    <div key={category.category}>
                      <div className="flex items-center gap-3 mb-4">
                        {getCategoryIcon(category.category)}
                        <h3 className="text-xl font-semibold">{category.category} Issues</h3>
                      </div>
                      <div className="space-y-4">
                        {category.issues.map(issue => (
                          <IssueCard key={issue.id} issue={issue} />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}