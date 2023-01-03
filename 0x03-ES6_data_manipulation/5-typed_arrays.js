export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(value);
  const view = new DataView(buffer);

  if (position >= length) {
    throw RangeError('Position outside range');
  }
  view.setInt8(position, value);
  return view;
}
