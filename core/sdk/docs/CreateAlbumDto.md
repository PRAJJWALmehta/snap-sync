
# CreateAlbumDto


## Properties

Name | Type
------------ | -------------
`albumName` | string
`description` | string

## Example

```typescript
import type { CreateAlbumDto } from ''

// TODO: Update the object below with actual values
const example = {
  "albumName": Summer Vacation 2026,
  "description": Photos from our trip to Italy,
} satisfies CreateAlbumDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateAlbumDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


