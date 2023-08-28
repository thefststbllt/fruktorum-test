export default function usePageData(data) {
  return reactive({
    pageTitle: data.title,
    pageName: data.slug,
    pageContent: data.description
  })
}