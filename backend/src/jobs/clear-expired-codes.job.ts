// Library Imports
import { prisma } from '@lib/prisma'

export const clearExpiredCodes = async () => {
	await prisma.resetPasswordCode.deleteMany({
		where: {
			expiredAt: {
				lt: new Date(),
			},
		},
	})
}
