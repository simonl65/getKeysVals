# getKeysVals
Javascript function to get specific keys and their values from (optionally nested) objects.

This function will return an array of objects containing the specified keys and values, but _only_ if **all** of the keys have values.

## Parameters
| param   | type    | detail |
|---------|---------|--------|
| `obj`     | object  | Object that we want to search through. May be nested. |
| `keys`    | array   | Array of keys to return. <b>**</b> |
| `recurse` | string  | [optional] Sub-objects to look within. |

<i><b>**</b> All keys must have values if any of them are to be returned.</i>

Say you have the following nested object (this one's for use with [Bootstrap-TreeView](https://github.com/jonmiles/bootstrap-treeview)) and you want to extract all the ids and their respective filePaths - that's what getKeysVals is for:
```javascript
const nodes = [
  {
    "id": 1526297177970,
    "text": "Some top-level item",
    "nodes": [
      {
        "id": 1526297185466,
        "tags": [1],
        "text": "text1",
        "state": { "checked": true, "expanded": true },
        "filePath": "path1.CSV"
      },
      {
        "id": 1526297195199,
        "tags": [1],
        "text": "Some sub-node",
        "nodes": [
          {
            "id": 1526297202132,
            "tags": [1],
            "text": "text2",
            "state": { "checked": true, "expanded": true },
            "filePath": "path2.CSV"
          },
          {
            "id": 1526297209980,
            "tags": [1],
            "text": "text3",
            "state": { "checked": true, "expanded": true },
            "filePath": "path3.CSV"
          }
        ],
        "state": { "checked": true }
      }
    ],
    "state": { "checked": true }
  }
];
```

## Example usage
Let's return those nodes which have values for **id**, **text** _and_ **filePath**.
```javascript
getKeysVals(nodes[0].nodes, ['id', 'text', 'filePath'], 'nodes');
```
**Result:**
```javascript
[
  { id: 1526297185466, text: "text1", filePath: "path1.CSV" },
  { id: 1526297202132, text: "text2", filePath: "path2.CSV" },
  { id: 1526297209980, text: "text3", filePath: "path3.CSV" }
]
```
