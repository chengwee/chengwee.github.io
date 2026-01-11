import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-slate-50 dark:bg-[#0B1120] transition-colors duration-500">
      {/* Minor Grid (Small squares) */}
      <div 
        className="absolute inset-0 
        bg-[image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
        bg-[size:20px_20px]
        dark:bg-[image:linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]"
      ></div>

      {/* Major Grid (Large squares) */}
      <div 
        className="absolute inset-0 
        bg-[image:linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] 
        bg-[size:100px_100px]
        dark:bg-[image:linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)]"
      ></div>

      {/* Vignette / Radial fade to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.4)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,17,32,0.6)_100%)] pointer-events-none"></div>
    </div>
  );
};