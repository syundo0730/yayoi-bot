CronJob = require("cron").CronJob

job = new CronJob(
  '*/1 * * * * *',
  () => {
		console.log('hello');
	},
	null,
	true,
	'America/Los_Angeles'
);
