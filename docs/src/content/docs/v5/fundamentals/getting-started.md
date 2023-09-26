---
title: Getting Started with Nikcio.UHeadless.Creation
description: Learn how to get started with Nikcio.UHeadless.Creation.
---

This guide will walk you through the process of integrating Nikcio.UHeadless.Creation into your Umbraco solution.

## Installation

To get started, follow the steps below:

### Step 1: Install the package

Install the Nikcio.UHeadless.Creation package using the following command:

```shell
dotnet add Nikcio.UHeadless.Creation
```

### Step 2: Add the extensions to the `Startup.cs` file

In your `Startup.cs` file, add the necessary extensions by following the code snippet below:

```csharp
using Nikcio.UHeadless.Creation.Extensions;

public void ConfigureServices(IServiceCollection services)
{
    services.AddUmbraco(_env, _config)
        /* Code omitted for clarity */
        .AddUHeadlessCreation()
        /* Code omitted for clarity */
}
```

The `.AddUHeadlessCreation()` method adds the services needed for Nikcio.UHeadless.Creation to run. This extension provides a range of options that can be customized. To learn more about available options, refer to the [UHeadless options](../reference/options) documentation.

### Step 3: Create your models

When you have added the UHeadless creation services you just need your models for querying the models. You can create your own from scratch or use the models in the `Nikcio.UHeadless.Creation.Models.Example` as a starting point. Find the models in the [Nikcio.UHeadless.Creation.Models.Example](https://github.com/nikcio/Nikcio.UHeadless/tree/v5/contrib/src/Nikcio.UHeadless.Creation.Models.Example) project in the `src` folder in the [Nikcio.UHeadless repository](https://github.com/nikcio/Nikcio.UHeadless).

:::note
The `Nikcio.UHeadless.Creation.Models.Example` depends on Umbraco v12+ to use the `IApiRichTextElementParser` for the Rich text editor. If you are using an older version of Umbraco you need to remove the `IApiRichTextElementParser` from the `RichTextModel` and expose the value of the editor as a string instead.
:::

### Step 4: Register your models

When you have created your models you need to register them in the `Startup.cs` file. This is done with an extension method like this one:

```csharp
public static class PropertyMapExtensions
{
    /// <summary>
    /// Adds the default mappings to the property map
    /// </summary>
    public static void AddPropertyMapDefaults(this IPropertyMap propertyMap)
    {
        propertyMap.AddEditorMapping<FallbackPropertyModel>(PropertyConstants.DefaultKey);
        propertyMap.AddEditorMapping<BlockListModel>(Constants.PropertyEditors.Aliases.BlockList);
        propertyMap.AddEditorMapping<BlockGridModel>(Constants.PropertyEditors.Aliases.BlockGrid);
        propertyMap.AddEditorMapping<NestedContentModel>(Constants.PropertyEditors.Aliases.NestedContent);
        propertyMap.AddEditorMapping<RichTextModel>(Constants.PropertyEditors.Aliases.TinyMce);
        propertyMap.AddEditorMapping<RichTextModel>(Constants.PropertyEditors.Aliases.MarkdownEditor);
        propertyMap.AddEditorMapping<MemberPickerModel>(Constants.PropertyEditors.Aliases.MemberPicker);
        propertyMap.AddEditorMapping<ContentPickerModel>(Constants.PropertyEditors.Aliases.ContentPicker);
        propertyMap.AddEditorMapping<MultiUrlPickerModel>(Constants.PropertyEditors.Aliases.MultiUrlPicker);
        propertyMap.AddEditorMapping<ContentPickerModel>(Constants.PropertyEditors.Aliases.MultiNodeTreePicker);
        propertyMap.AddEditorMapping<ContentPickerModel>(Constants.PropertyEditors.Aliases.MultiNodeTreePicker);
        propertyMap.AddEditorMapping<MediaPickerModel>(Constants.PropertyEditors.Aliases.MediaPicker);
        propertyMap.AddEditorMapping<MediaPickerModel>(Constants.PropertyEditors.Aliases.MediaPicker3);
        propertyMap.AddEditorMapping<MediaPickerModel>(Constants.PropertyEditors.Aliases.MultipleMediaPicker);
        propertyMap.AddEditorMapping<DateTimePickerModel>(Constants.PropertyEditors.Aliases.DateTime);
        propertyMap.AddEditorMapping<LabelModel>(Constants.PropertyEditors.Aliases.Label);
        propertyMap.AddEditorMapping<UnsupportedPropertyModel>(Constants.PropertyEditors.Aliases.Grid);
    }
}
```

This extension method is called in the `ConfigureServices` method in the `Startup.cs` file like this:

```csharp
services.AddUmbraco(_env, _config)
    /* Code omitted for clarity */
    .AddUHeadlessCreation(new()
    {
        PropertyServicesOptions = new()
        {
            PropertyMapOptions = new()
            {
                PropertyMappings = new()
                {
                    propertyMap => propertyMap.AddPropertyMapDefaults(),
                }
            }
        }
    })
    /* Code omitted for clarity */
    .Build();
```

Congratulations! You have successfully integrated Nikcio.UHeadless.Creation into your Umbraco solution. 


To explore the available queries and how to use them, refer to the following documentation:

- [Learn how to query properties](../querying/properties)
- [Querying Content](../querying/content)
- [Querying Media](../querying/media)
- [Querying Members](../querying/members)

## Next steps

- [Extending Nikcio.UHeadless.Creation](../extend-uheadless)

If you have any questions or need further assistance, don't hesitate to reach out to us. Happy coding with Nikcio.UHeadless.Creation.