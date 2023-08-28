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

### Step 3: TODO

TODO

Congratulations! You have successfully integrated Nikcio.UHeadless.Creation into your Umbraco solution. 


To explore the available queries and how to use them, refer to the following documentation:

- [Learn how to query properties](../querying/properties)
- [Querying Content](../querying/content)
- [Querying Media](../querying/media)
- [Querying Members](../querying/members)

## Next steps

- [Extending Nikcio.UHeadless.Creation](../extend-uheadless)

If you have any questions or need further assistance, don't hesitate to reach out to us. Happy coding with Nikcio.UHeadless.Creation.