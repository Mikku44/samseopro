import React from 'react';
import { BarChart3, MousePointerClick, Eye, Target } from 'lucide-react';

const SearchPerformance = () => {
  const screenshots = [
    { id: 1, src: '/search5.png', title: 'Overall Performance' },
    { id: 2, src: '/search2.png', title: 'Total Clicks' },
    { id: 3, src: '/search3.png', title: 'Total Impressions' },
    // { id: 4, src: '/search4.png', title: 'Average CTR' },
    // { id: 5, src: '/search.png', title: 'Average Position' },
  ];

  return (
    <section className="bg-gray-900 py-12 px-6 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-50 flex justify-center items-center gap-2">
            <BarChart3 className="text-blue-600" />
            Google Search Console Insights
          </h2>
          <p className="text-gray-200 mt-2">
            A visual of organic search growth and visibility.
          </p>
        </div>

        {/* Featured Large Image (search.png) */}
        <div className="mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Primary Growth Overview</p>
            <img 
              src={screenshots[0].src} 
              alt={screenshots[0].title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Secondary Grid (search2.png to search5.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {screenshots.slice(1).map((img) => (
            <div key={img.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 transition-hover hover:shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <h3 className="font-medium text-gray-700">{img.title}</h3>
              </div>
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-auto rounded-lg border border-gray-100"
              />
            </div>
          ))}
        </div>

        {/* Client Footer Note */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1"><MousePointerClick size={16}/> High Intent Traffic</span>
          <span className="flex items-center gap-1"><Eye size={16}/> Increased Brand Authority</span>
          <span className="flex items-center gap-1"><Target size={16}/> Optimized Keyword Ranking</span>
        </div>
      </div>
    </section>
  );
};

export default SearchPerformance;