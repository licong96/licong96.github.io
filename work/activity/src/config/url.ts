let env = 'pro';

const HOST = window.location.host;

if (
	HOST.includes('localhost') ||
	HOST.includes('192.168')
) {
	env = 'dev';
} else if (
  HOST.includes('stage')
) {
	env = 'stage';
} else if (
	HOST.includes('pre')
) {
	env = 'pre';
}

export const URL: ConfigURL = {
	ENV: env,
}