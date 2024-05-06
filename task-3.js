function getElementWidth(content, padding, border) {
  const contentWidth = parseInt(content);
  const paddingWidth = 2 * parseInt(padding); // Padding po obu stronach
  const borderWidth = 2 * parseInt(border); // Ramka po obu stronach
  return contentWidth + paddingWidth + borderWidth;
}
