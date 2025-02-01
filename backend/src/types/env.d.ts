declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV?: 'development' | 'production'
		PORT: string
		DATABASE_URL: string
		JWT_SECRET: string
		MAIL_HOST: string
		MAIL_AUTH_USER: string
		MAIL_AUTH_PASSWORD: string
	}
}
