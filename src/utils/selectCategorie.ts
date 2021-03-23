export const selectCategorie = (data: any, slug: string) => {
  return Object.keys(data).find(key => data[key] === slug);
};

export const selectItemInArrayObject = (data: any, slug: string) => {
  console.log("data", data);
  console.log("slug", slug);
  //  let result;
  for (const index in data) {
    console.log(index);
    console.log(data[index].slug_wp_meta);
    console.log(slug);
    if (data[index].slug_wp_meta == slug) {
      return data[index];
    }
  }

  //  return result;
  //  for (var i = 0; i < data.length; i++) {
  //    if (data[i].slug === slug) {
  //      return data[i];
  //    }
  //  }
};
