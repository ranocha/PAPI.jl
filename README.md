# PAPI.jl

Julia bindings for the [PAPI](http://icl.cs.utk.edu/papi/index.html) hardware performance counters library

## Introduction

Performance Application Programming Interface [PAPI](http://icl.cs.utk.edu/papi/index.html) was designed to be a portable and efficient API to access
the performance counters available on modern processors. These counters can provide insight to performance engineers
about improvements that can be make in their code. As performance metrics can have different definitions and different
programming interfaces across platforms, PAPI attempts:

- To present a set of standard definitions for performance metrics on all platforms
- To provide a standardized API among users, vendors, and academics

This package provides access to the functionality of `libPAPI`, but also builds more high-level functions on top of it.
Its goal is to implement useful primitives that developers can easily understand and use. For example,

```julia
@profile sum(X)
@sample sum(X)
```

Please see the [documentation](https://tomhaber.github.io/PAPI.jl/stable/) for instructions and examples.

## Prerequisites

The package depends on `libPAPI` which can either be installed on the system (recommended) or from `PAPI_jll` (default).

To use the system's libPAPI, you'll need to build PAPI.jl as follows

```bash
JULIA_PAPI_BINARY=system julia -e 'import Pkg; Pkg.build("PAPI")'
```

This will try to locate libPAPI on the system. Additional hints can be given using: `JULIA_PAPI_LIBRARY` and `JULIA_PAPI_PATH` environment variables.

## Basic usage

```julia
using PAPI

function mysum(X::AbstractArray)
    s = zero(eltype(X))
    for x in X
        s += x
    end
    s
end

X = rand(10_000)
stats = @profile mysum(X)
```

## Contributing

Contributions are encouraged. In particular, PAPI provides many components, configurable at compilation time,
while counters can be accessed through the native API by name, this can be cumbersome, low-level and ill-documented.

If there are additional functions you would like to use, please open an [issue](https://github.com/tomhaber/PAPI.jl/issues) or [pull request](https://github.com/tomhaber/PAPI.jl/pulls).

Additional examples and documentation improvements are also very welcome.
