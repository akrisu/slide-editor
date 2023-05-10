import { closestCenter, DndContext, DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers'
import { arrayMove, horizontalListSortingStrategy, SortableContext } from '@dnd-kit/sortable'
import { forwardRef, useState } from 'react'

import { IconName } from '../IconPicker'
import { Section } from './Section'
import { Title } from './Title'

export const Slide = forwardRef<HTMLDivElement>((_, ref) => {
  const [items, setItems] = useState<IconName[]>([
    "heart_broken",
    "pie_chart",
    "thumb_up",
  ]);

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
        const activeIndex = items.indexOf(active.id as IconName);
        const overIndex = items.indexOf(over.id as IconName);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <section ref={ref}>
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
              <Section key={item} defaultIcon={item} />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </section>
  );
});
