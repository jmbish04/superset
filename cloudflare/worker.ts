import { Container } from "cloudflare:containers";

export class Website extends Container {
	defaultPort = 8080;
}

interface Env {
	WEBSITE: DurableObjectNamespace<Website>;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const id = env.WEBSITE.idFromName("superset-website");
		const container = env.WEBSITE.get(id);
		return container.fetch(request);
	},
};
