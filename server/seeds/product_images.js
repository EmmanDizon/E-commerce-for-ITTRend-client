const images = [
  {
    product_id: 1,
    url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3u0jz",
  },
  {
    product_id: 1,
    url: "https://c.s-microsoft.com/en-us/CMSImages/Surface_F21_DeviceFamily_DO2_V1.jpg?version=51b444e9-b150-fddc-e621-68cc29080173",
  },
  {
    product_id: 2,
    url: "https://i.guim.co.uk/img/media/723219db7393e587af4c2a34a9df187e6bb537eb/0_0_3970_2382/master/3970.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=02480597f52bbfb14658fe60c6c34da6",
  },
];

exports.seed = function (knex) {
  return knex("product_images").insert(
    images.map((e) => {
      return {
        product_id: e.product_id,
        url: e.url,
      };
    })
  );
};
