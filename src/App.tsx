import { closestCenter, DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers'
import { arrayMove, horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable'
import { useState } from 'react'

import { IconWithTitleAndDescription } from './IconWithTitleAndDescription'
import { Title } from './Title'

function App() {
  const [items, setItems] = useState([1, 2, 3]);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (over) {
      setItems((items) => {
        const activeIndex = items.indexOf(+active.id);
        const overIndex = items.indexOf(+over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <>
      <Title />
      <DndContext
        sensors={sensors}
        modifiers={[restrictToHorizontalAxis]}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
      >
        <div className="gap-8 grid grid-cols-3 grid-flow-col">
          <SortableContext
            strategy={horizontalListSortingStrategy}
            items={items}
          >
            {items.map((item) => (
              <IconWithTitleAndDescription key={item} id={item} />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </>
  );
}

export default App;
