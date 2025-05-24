Task create a widget loader using lazy and suspense

1. Create a component with returns news. (Static intially)
2. Create a container which accepts various components and load them duynamically. name: WidgetLoader
3. WidgetLoader accepts component name as a param
4. use lazy and import to load the component passed.
5. Use suspense to load a loader while loading the component.

Task 2:
✅ Requirements:
    1. Create a list of enabled widgets like: const defaultWidgets = ['Weather', 'News', 'Todo', 'StockTicker'];
    2. Use react-beautiful-dnd (or dnd-kit) to make the list reorderable.
    3. Wrap each widget in a Draggable item and render using <WidgetLoader widgetName={...} />.
    4. Save updated order to localStorage on drag end. On initial load, check localStorage for saved order.
