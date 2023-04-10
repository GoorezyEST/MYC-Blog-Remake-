export async function getServerSideProps(item) {
  let title;
  let description;
  let image;

  item.map((item) => {
    if (item.page === "inicio") {
      title = item.title;
      description = item.description;
      image = item.image;
    }
  });

  return {
    props: {
      title,
      description,
      image,
    },
  };
}
