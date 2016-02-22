CronJob = require("cron").CronJob

job = new CronJob(
  '*/1 * * * * *',
  () => {
		console.log('hello');
	},
	null,
	true,
	'Asia/Tokyo'
);
