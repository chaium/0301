import { upper } from "../Function/Function";
import { lower } from "../Function/Function";

const meters = Array.from(
{ length: (5 - 0) / 0.01 + 1 },
(value, index) => 0 + index * 0.01
);

const exhale = meters.map(x => ({distance: x, jet: [upper(x, 20.25, 4), lower(x, 20.25, 4)]}));

export default exhale