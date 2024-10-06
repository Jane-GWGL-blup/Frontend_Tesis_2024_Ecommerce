export const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')  // Reemplaza espacios con -
      .replace(/[^\w\-]+/g, '')  // Elimina caracteres especiales
      .replace(/\-\-+/g, '-');  // Reemplaza múltiples guiones por uno solo
  };