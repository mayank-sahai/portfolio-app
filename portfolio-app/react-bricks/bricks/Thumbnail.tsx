// Thumbnail.tsx
import React from 'react'
import { types, Text, RichText } from 'react-bricks/frontend'

const Thumbnail: types.Brick = () => {
    return (
      <div className="p-6 text-center">
        <Text
          propName="title"
          renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1>}
          placeholder="Type a title..."
        />
        <RichText
          propName="description"
          renderBlock={({ children }) => (
            <p className="text-lg text-gray-500">{children}</p>
          )}
          placeholder="Type a description"
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Highlight,
          ]}
        />
      </div>
    )
  }
  
  Thumbnail.schema = {
    name: 'thumbnail',
    label: 'Thumbnail',
    getDefaultProps: () => ({
      title: 'Hello, world!',
      description: 'Lorem ipsum dolor sit amet.',
    }),
    sideEditProps: [],
  }
  
  export default Thumbnail
  