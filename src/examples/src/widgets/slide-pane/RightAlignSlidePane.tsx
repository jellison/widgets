import { create, tsx } from '@dojo/framework/core/vdom';
import SlidePane, { Align } from '@dojo/widgets/slide-pane';
import icache from '@dojo/framework/core/middleware/icache';

const factory = create({ icache });

export default factory(function RightAlignSlidePane({ middleware: { icache } }) {
	return (
		<SlidePane
			title="Right Aligned SlidePane"
			open={icache.getOrSet('open', true)}
			underlay={false}
			align={Align.right}
			onRequestClose={() => {
				icache.set('open', false);
			}}
		>
			{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Quisque id purus ipsum. Aenean ac purus purus.
			Nam sollicitudin varius augue, sed lacinia felis tempor in.
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Quisque id purus ipsum. Aenean ac purus purus.
			Nam sollicitudin varius augue, sed lacinia felis tempor in.
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Quisque id purus ipsum. Aenean ac purus purus.
			Nam sollicitudin varius augue, sed lacinia felis tempor in.
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Quisque id purus ipsum. Aenean ac purus purus.
			Nam sollicitudin varius augue, sed lacinia felis tempor in.
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Quisque id purus ipsum. Aenean ac purus purus.
			Nam sollicitudin varius augue, sed lacinia felis tempor in.
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Quisque id purus ipsum. Aenean ac purus purus.
			Nam sollicitudin varius augue, sed lacinia felis tempor in.
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Quisque id purus ipsum. Aenean ac purus purus.
			Nam sollicitudin varius augue, sed lacinia felis tempor in.
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Quisque id purus ipsum. Aenean ac purus purus.
			Nam sollicitudin varius augue, sed lacinia felis tempor in.`}
		</SlidePane>
	);
});
