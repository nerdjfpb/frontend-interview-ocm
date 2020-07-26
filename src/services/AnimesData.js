import { gql } from '@apollo/client'

export const ALL_ANIMES = gql`
	{
		Page(page: 1) {
			media {
				id
				coverImage {
					extraLarge
				}
				title {
					userPreferred
				}
				status
				episodes
			}
		}
	}
`
