import { getClient } from '@/libs/cms/microCmsClient'
import type { PostsType, WorksType } from '@/libs/cms/types/MicroCmsType'

export const getContents = async (endpoint: 'works' | 'posts'): Promise<WorksType[] | PostsType[]> => {
  const data = await getClient().get({
    endpoint: endpoint,
  })

  return data.contents
}
