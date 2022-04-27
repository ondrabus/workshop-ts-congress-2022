import { camelCasePropertyNameResolver, DeliveryClient, IDeliveryClient } from '@kentico/kontent-delivery'

export default class KontentService {
	private static _instance: KontentService
	protected client: DeliveryClient

	public get deliveryClient(): IDeliveryClient {
		return this.client
	}

	public static Instance() {
		if (!this._instance) {
			this._instance = new this()
		}

		return this._instance
	}

	protected constructor() {
		this.client = new DeliveryClient({
			projectId: process.env.KONTENT_PROJECT_ID ?? '',
			propertyNameResolver: camelCasePropertyNameResolver,
		})
	}
}
