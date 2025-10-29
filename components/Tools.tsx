import React, { useState, forwardRef, lazy, Suspense } from 'react';
import Modal from './Modal';
import SectionTitle from './SectionTitle';

// Fix: Lazily load tool components for better performance.
const Calculator = lazy(() => import('./tools/Calculator'));
const TodoList = lazy(() => import('./tools/TodoList'));
const TemperatureConverter = lazy(() => import('./tools/TemperatureConverter'));

const tools = [
  { id: 'calculator', name: 'Calculator', description: 'A classic calculator for your daily computations.', component: <Calculator /> },
  { id: 'todo', name: 'To-Do List', description: 'Organize your tasks and stay productive.', component: <TodoList /> },
  { id: 'temp', name: 'Temp Converter', description: 'Quickly convert between Celsius and Fahrenheit.', component: <TemperatureConverter /> },
];

interface Tool {
  id: string;
  name: string;
  description: string;
  component: React.ReactNode;
}

const Tools = forwardRef<HTMLElement>((props, ref) => {
  const [activeTool, setActiveTool] = useState<Tool | null>(null);

  const openModal = (tool: Tool) => {
    setActiveTool(tool);
  };

  const closeModal = () => {
    setActiveTool(null);
  };

  return (
    <section ref={ref} id="tools" className="py-24 fade-up-on-scroll">
      <div className="container mx-auto">
        <SectionTitle number="2" title="My Tools" className="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => openModal(tool)}
              data-interactive
              className="bg-zinc-900 p-6 rounded-md shadow-lg transform transition-all duration-300 hover:-translate-y-2 border border-zinc-800/50 hover:border-orange-500/30 flex flex-col justify-center items-center cursor-pointer group h-48 text-center glow-on-hover"
            >
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-orange-500 transition-colors">
                {tool.name}
              </h3>
               <p className="text-slate-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {activeTool && (
        <Modal
          isOpen={!!activeTool}
          onClose={closeModal}
          title={activeTool.name}
        >
          <Suspense fallback={<div className="text-center p-8 text-slate-300">Loading...</div>}>
            {activeTool.component}
          </Suspense>
        </Modal>
      )}
    </section>
  );
});

Tools.displayName = 'Tools';

export default Tools;