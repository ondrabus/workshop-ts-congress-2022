import React from "react"
import { RichTextElement } from '@simply007org/kontent-react-components';
import { Element } from 'domhandler';

const ComponentTextWithImage = ({ elements, system }) => {
    
    return (
    <section
        id={system.codename}
        className="bg-white py-8">
        <div className="container max-w-5xl mx-auto m-8">
            <h1
                className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
            >
                {elements.headline.value}
            </h1>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-5/6 sm:w-1/2 p-6">
                    <RichTextElement
                        richTextElement={elements.text}
                        resolvers={{
                            resolveLink: (link, { domElement, domToReact }) => {
                                return (
                                <a href={`/${link.urlSlug}`}>
                                    {domToReact(domElement.children)}
                                </a>
                            )},
                            resolveDomNode: ({ domNode }) => {
                                if (domNode.name === 'p') {
                                    domNode.attribs.className = "text-gray-600 mb-8"
                                    return null
                                }
                            }
                        }} />
                </div>
                <div className="w-full sm:w-1/2 p-6">
                    <img src={elements.image.value[0].url} />
                </div>
            </div>
        </div>
    </section>)
}

export default ComponentTextWithImage