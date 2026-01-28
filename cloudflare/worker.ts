import { Container, getContainer } from "cloudflare:containers";
import type { DurableObjectNamespace } from "cloudflare:workers";

export class Website extends Container {
	defaultPort = 8080;
}

interface Env {
	WEBSITE: DurableObjectNamespace<Website>;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const container = getContainer(env.WEBSITE, "superset-website");
		return container.fetch(request);
	},
};
