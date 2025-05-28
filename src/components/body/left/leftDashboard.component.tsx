import type { GridStackOptions } from 'gridstack';
import type { ComponentProps } from 'react';
import { type ComponentDataType, type ComponentMap, GridStackProvider, GridStackRender, GridStackRenderProvider } from './../../gridstack/lib/';
const CELL_HEIGHT = 50;
const BREAKPOINTS = [
  { c: 1, w: 700 },
  { c: 3, w: 850 },
  { c: 6, w: 950 },
  { c: 8, w: 1100 },
];

function Text({ content }: { content: string }) {
  return <div className="w-full h-full">{content}</div>;
}

const COMPONENT_MAP: ComponentMap = {
  Text
};

const gridOptions: GridStackOptions = {
  acceptWidgets: true,
  columnOpts: {
    breakpointForWindow: true,
    breakpoints: BREAKPOINTS,
    layout: 'moveScale',
    columnMax: 12,
  },
  margin: 8,
  cellHeight: CELL_HEIGHT,
  children: [
    {
      id: 'evo-pre-anual',
      h: 6,
      w: 12,
      x: 0,
      y: 0,
      content: JSON.stringify({
        name: "Text",
        props: { content: "Item 1" },
      } satisfies ComponentDataType<ComponentProps<typeof Text>>),
    },
    {
      id: 'vent-mes',
      h: 5,
      w: 3,
      x: 0,
      y: 0,
      content: JSON.stringify({
        name: "Text",
        props: { content: "Item 1" },
      } satisfies ComponentDataType<ComponentProps<typeof Text>>),
    },
    {
      id: 'evo-fact-emitidas',
      h: 5,
      w: 3,
      x: 0,
      y: 0,
      content: JSON.stringify({
        name: "Text",
        props: { content: "Item 1" },
      } satisfies ComponentDataType<ComponentProps<typeof Text>>),
    },
    {
      id: 'tab-fact-emit',
      h: 10,
      w: 6,
      x: 3,
      y: 0,
      content: JSON.stringify({
        name: "Text",
        props: { content: "Item 1" },
      } satisfies ComponentDataType<ComponentProps<typeof Text>>),
    },
    {
      id: 'tot-imp',
      h: 5,
      w: 3,
      x: 9,
      y: 0,
      content: JSON.stringify({
        name: "Text",
        props: { content: "Item 1" },
      } satisfies ComponentDataType<ComponentProps<typeof Text>>),
    },
    {
      id: 'tot-prod-ven',
      h: 5,
      w: 3,
      x: 9,
      y: 0,
      content: JSON.stringify({
        name: "Text",
        props: { content: "Item 1" },
      } satisfies ComponentDataType<ComponentProps<typeof Text>>),
    },
  ],
};

const loadLayoutFromLocalStorage = () => {
  const saved = localStorage.getItem('gridstack-layout');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        ...gridOptions,
        children: parsed.children, // sobrescribe el layout
      };
    } catch (error) {
      console.error('Error parsing saved layout', error);
    }
  }
  return gridOptions; // usa el layout por defecto si no hay guardado
};

import { Fragment, useState } from 'react';
const LeftDashboard = () => {
  //#region hooks

  //#endregion

  //#region props
  const [initialOptions] = useState(loadLayoutFromLocalStorage);
  //#endregion

  //#region callBacks

  //#endregion

  //#region effects

  //#endregion

  //#region component
  return (
    <Fragment>
      <GridStackProvider initialOptions={initialOptions}>
        <GridStackRenderProvider>
          <GridStackRender componentMap={COMPONENT_MAP} />
        </GridStackRenderProvider>
      </GridStackProvider>
    </Fragment>
  );
  //#endegion
};
export default LeftDashboard;