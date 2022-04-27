import { IContentItem } from "@kentico/kontent-delivery"
import { GetStaticProps } from "next"
import Nav from "../components/Nav"
import KontentService from "../services/KontentService"

interface Props {
  pages: IContentItem[]
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const page = await KontentService.Instance().deliveryClient
    .items()
    .type('landing_page')
    .elementsParameter([
      'title', 'url_slug'
    ])
    .toPromise()

  return {
    props: {
      pages: page.data.items
    }
  }
}
const HomePage: React.FC<Props> = ({pages}) => {
  return (
    <main>
      <Nav data={null} />
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <ul>
            {pages && pages.map(page => <li key={page.system.id}><a href={'/' + page.elements.urlSlug.value}>{page.elements.title.value}</a></li>)}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default HomePage