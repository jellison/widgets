import { create, tsx } from '@dojo/framework/core/vdom';
import RangeSlider from '@dojo/widgets/range-slider';

const factory = create();

export default factory(function Basic() {
	return <RangeSlider />;
});
