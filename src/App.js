import React, { useState } from 'react';
import { Menu, X, Bell, BarChart, User, LogOut, PlusCircle, CheckCircle2, Zap, Globe, ChevronDown } from 'lucide-react';

const Header = ({ activePage, setActivePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: BarChart },
    { name: 'Create API', icon: PlusCircle },
    { name: 'Analytics', icon: Bell },
    { name: 'Account', icon: User },
    { name: 'Documentation', icon: User },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">OpenCommerce Kiosk</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map(({ name, icon: Icon }) => (
              <li key={name}>
                <button 
                  className={`flex items-center hover:text-indigo-600 transition-colors ${activePage === name ? 'text-indigo-600' : 'text-gray-600'}`}
                  onClick={() => setActivePage(name)}
                >
                  <Icon size={18} className="mr-2" />
                  {name}
                </button>
              </li>
            ))}
            <li>
              <button 
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                onClick={() => setActivePage('Landing')}
              >
                <LogOut size={18} className="mr-2" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="px-4 py-2">
            {[...navItems, { name: 'Logout', icon: LogOut, onClick: () => setActivePage('Landing') }].map(({ name, icon: Icon, onClick }) => (
              <li key={name}>
                <button 
                  className={`flex items-center py-2 w-full hover:text-indigo-600 transition-colors ${activePage === name ? 'text-indigo-600' : 'text-gray-600'}`}
                  onClick={() => {
                    onClick ? onClick() : setActivePage(name);
                    setMenuOpen(false);
                  }}
                >
                  <Icon size={18} className="mr-2" />
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

const Dashboard = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8">Welcome back, API Provider!</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {[
        { title: 'Total APIs', value: '0', icon: Globe },
        { title: 'Total Revenue', value: '$0', icon: Zap },
        { title: 'Active Subscriptions', value: '0', icon: CheckCircle2 },
        { title: 'New Users', value: '0', icon: User },
      ].map(({ title, value, icon: Icon }) => (
        <div key={title} className="bg-white p-6 rounded-lg shadow-sm flex items-center">
          <Icon size={24} className="text-indigo-600 mr-4" />
          <div>
            <h3 className="font-semibold text-gray-600">{title}</h3>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Your API Services</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center">
          <PlusCircle size={18} className="mr-2" />
          Create New API Service
        </button>
      </div>
      <div className="text-center py-8 text-gray-500">
        <p>You haven't created any API services yet.</p>
        <p>Click the button above to get started!</p>
      </div>
    </div>
  </div>
);

const CreateAPI = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8">Create New API Service</h1>
    <form className="bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="api-name">API Name</label>
        <input 
          type="text" 
          id="api-name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
          placeholder="Enter API name"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="api-description">Description</label>
        <textarea 
          id="api-description"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
          rows="3"
          placeholder="Describe your API"
        ></textarea>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="api-category">Category</label>
        <select 
          id="api-category"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
        >
          <option>Select a category</option>
          <option>Data Processing</option>
          <option>Financial</option>
          <option>Machine Learning</option>
          <option>Other</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="api-docs-url">API Documentation URL</label>
        <input 
          type="url" 
          id="api-docs-url"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
          placeholder="https://docs.example.com"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="api-endpoint-url">API Endpoint URL</label>
        <input 
          type="url" 
          id="api-endpoint-url"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
          placeholder="https://api.example.com"
        />
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">Subscription Configuration</h3>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="subscription-price">Price</label>
            <input 
              type="number" 
              id="subscription-price"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
              placeholder="0.00"
            />
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="subscription-token">Token</label>
            <select 
              id="subscription-token"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            >
              <option>USDC</option>
              <option>ETH</option>
            </select>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="subscription-duration">Duration</label>
            <div className="flex">
              <input 
                type="number" 
                id="subscription-duration"
                className="w-2/3 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
                placeholder="1"
              />
              <select 
                className="w-1/3 p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              >
                <option>Days</option>
                <option>Weeks</option>
                <option>Months</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button type="button" className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors mr-4">Cancel</button>
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">Save and Deploy</button>
      </div>
    </form>
  </div>
);

const Analytics = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="flex flex-wrap items-center mb-6">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <label className="mr-2 text-gray-700">Date Range:</label>
          <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Custom</option>
          </select>
        </div>
        <div className="w-full md:w-1/2">
          <label className="mr-2 text-gray-700">API Service:</label>
          <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent">
            <option>All Services</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Total Revenue', 'Active Subscriptions', 'New Subscriptions', 'API Calls Made'].map((metric) => (
          <div key={metric} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-600 mb-2">{metric}</h3>
            <p className="text-2xl font-bold text-gray-800">0</p>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Charts and Graphs</h2>
      <div className="h-64 bg-gray-100 flex items-center justify-center rounded-lg">
        <p className="text-gray-500">Charts will be displayed here</p>
      </div>
    </div>
  </div>
);

const Account = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
    <form className="bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="display-name">Display Name</label>
        <input 
          type="text" 
          id="display-name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" 
          placeholder="Your name"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email-address">Email Address</label>
        <input 
          type="email" 
          id="email-address"
          className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md" 
          readOnly 
          value="provider@example.com"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="wallet-address">Wallet Address</label>
        <input 
          type="text" 
          id="wallet-address"
          className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md" 
          readOnly 
          value="0x1234...5678"
        />
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-4">Notification Preferences</h3>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-gray-700">New subscriptions</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-gray-700">Low balance alerts</span>
        </label>
      </div>
      <div className="mt-8">
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">Save Changes</button>
      </div>
    </form>
  </div>
);


const LandingPage = ({ onLogin }) => (
  <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-indigo-800 text-white">
    <header className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">OpenCommerce Kiosk</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
          <li><a href="#Directory" className="hover:underline">Directory</a></li>
          <li><button onClick={onLogin} className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-indigo-100 transition">Login</button></li>
        </ul>
      </nav>
    </header>

    <main className="container mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Monetize Your API for Machines</h1>
        <p className="text-xl mb-8">Securely deploy, manage, and monetize your APIs for machine agents</p>
        <button onClick={onLogin} className="bg-white text-indigo-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-100 transition">Get Started</button>
      </section>

      <section id="features" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Easy Deployment', icon: <PlusCircle size={40} /> },
            { title: 'Secure Payments', icon: <CheckCircle2 size={40} /> },
            { title: 'Real-Time Analytics', icon: <Bell size={40} /> },
            { title: 'Global Reach', icon: <Globe size={40} /> }
          ].map((feature, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>Streamline your API operations with our cutting-edge platform.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
          {['Sign Up', 'Create API Listing', 'Deploy Smart Contract', 'Start Earning'].map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                {index + 1}
              </div>
              <span>{step}</span>
              {index < 3 && <ChevronDown size={24} className="ml-3 hidden md:block" />}
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8">Join innovative API providers already using our platform</p>
        <button onClick={onLogin} className="bg-white text-indigo-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-100 transition">Get Started Now</button>
      </section>
    </main>

    <footer className="bg-indigo-900 py-6 mt-16">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2024 OpenCommerce Kiosk. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

const App = () => {
  const [activePage, setActivePage] = useState('Landing');

  const handleLogin = () => {
    setActivePage('Dashboard');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'Landing':
        return <LandingPage onLogin={handleLogin} />;
      case 'Dashboard':
        return (
          <>
            <Header activePage={activePage} setActivePage={setActivePage} />
            <Dashboard />
          </>
        );
      case 'Create API':
        return (
          <>
            <Header activePage={activePage} setActivePage={setActivePage} />
            <CreateAPI />
          </>
        );
      case 'Analytics':
        return (
          <>
            <Header activePage={activePage} setActivePage={setActivePage} />
            <Analytics />
          </>
        );
      case 'Account':
        return (
          <>
            <Header activePage={activePage} setActivePage={setActivePage} />
            <Account />
          </>
        );
      default:
        return <LandingPage onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {renderPage()}
    </div>
  );
};

export default App;