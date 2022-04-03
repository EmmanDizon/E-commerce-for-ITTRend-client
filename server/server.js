const app = require("./app");
const logger = require("./common/logger");

const server = app.listen(process.env.PORT, () => {
  logger.info(
    `Server is listening on http://localhost:${process.env.PORT} on ${process.env.NODE_ENV} mode.`
  );
});

process.on("unhandledRejection", (err) => {
  logger.error(err.message);
  console.log(`Error: ${err.message}`);

  process.exit(1);
});
