import { CheckSquare, Users, Clock, BarChart, Bell, Zap } from 'lucide-react';
import ProductPageTemplate from '../../components/ProductPageTemplate';

export default function TaskManager() {
  const features = [
    {
      title: 'Task Tracking',
      description: 'Create, assign, and track tasks with due dates and priorities.',
      icon: <CheckSquare className="h-6 w-6" />
    },
    {
      title: 'Team Collaboration',
      description: 'Work together with your team in real-time on shared projects.',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Time Tracking',
      description: 'Log time spent on tasks and generate productivity reports.',
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: 'Progress Insights',
      description: 'Visualize your team\'s progress with intuitive charts and metrics.',
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: 'Notifications',
      description: 'Stay updated with real-time alerts and reminders.',
      icon: <Bell className="h-6 w-6" />
    },
    {
      title: 'Quick Actions',
      description: 'Keyboard shortcuts and quick-add features for maximum efficiency.',
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <ProductPageTemplate
      title="TETRA Task Manager"
      description="A powerful task and project management tool that helps teams organize, track, and accomplish their work efficiently."
      features={features}
      ctaText="Start Managing Tasks"
    >
      <div className="mt-12 bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Why Use TETRA Task Manager?</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            TETRA Task Manager is designed to help teams of all sizes stay organized and productive. 
            With intuitive features and a clean interface, you can focus on getting work done without 
            the overhead of complex project management tools.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <CheckSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Customizable Workflows</h4>
                    <p className="text-sm text-gray-600">Tailor your task management to fit your team's process</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Team Collaboration</h4>
                    <p className="text-sm text-gray-600">Comment, mention, and collaborate in real-time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                    <BarChart className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Advanced Reporting</h4>
                    <p className="text-sm text-gray-600">Track progress and identify bottlenecks</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Integrations</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Calendar Sync</h4>
                  <p className="text-sm text-gray-600">Sync with Google Calendar and Outlook</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Cloud Storage</h4>
                  <p className="text-sm text-gray-600">Connect with Google Drive and Dropbox</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Communication</h4>
                  <p className="text-sm text-gray-600">Integrate with Slack and Microsoft Teams</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium mb-1">Development</h4>
                  <p className="text-sm text-gray-600">Connect with GitHub and GitLab</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Ready to Boost Your Team's Productivity?</h3>
            <p className="mb-4">
              Try TETRA Task Manager for free and see how it can transform the way your team works.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/signup"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                Start Free Trial
              </a>
              <a
                href="/demo"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}
