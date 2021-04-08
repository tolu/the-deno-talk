# the deno talk

> https://deno.land/

To get a dev environment that already has `deno` (latest) installed and the official deno-language plugin, use VS Code and select "reopen in container" like so.

![image](https://user-images.githubusercontent.com/658586/111420864-44d2c680-86ec-11eb-9ecc-2859a30dd948.png)

> ℹ️ TIP ℹ️  
> Use <kbd>cmd/ctrl</kbd>+<kbd>shift</kbd>+<kbd>B</kbd> (in a file) for a list of pre-defined tasks for running, formatting, linting, compiling etc

## Basics

### CLI

#### 1. Repl

```sh
deno repl # or just "deno"
```

#### 2. Run programs

Run a remote or local file

```sh
# from url
deno run https://deno.land/std@0.92.0/examples/welcome.ts

# curl https://deno.land/std@0.92.0/examples/welcome.ts

# from filesystem
deno run src/00.welcome.ts
```

#### 3. Info util

Get dependency graph of program

```sh
# 0 deps file
deno info https://deno.land/std@0.92.0/examples/welcome.ts

# more deps
deno info https://deno.land/std@0.92.0/http/file_server.ts
```

#### 4. Install program

Easily install and distribute executable code.

```sh
# "-n" to set name, otherwise inferred
deno install -A -n serve https://deno.land/std@0.92.0/http/file_server.ts
```

### Permissions

Using file_server from last example

```sh
# no permissions
deno run https://deno.land/std@0.92.0/http/file_server.ts

# add read
deno run --allow-read https://deno.land/std@0.92.0/http/file_server.ts

# add net
deno run --allow-read --allow-net https://deno.land/std@0.92.0/http/file_server.ts

# allow all
deno run -A https://deno.land/std@0.92.0/http/file_server.ts
```

Other permissions include:

- `--allow-env` env variables
- `--allow-net=<domain1, domain2>` network
- `--allow-read=<dir1, file1>` file system read
- `--allow-run` subprocesses
- `--allow-write=<dir1, file1>` file system write
- `--allow-hrtime` high res time
- `--allow-plugin`
- `--allow-all`

> Permissions need to be declared at installation time for `deno install`

## Demos in src

### 01.server

> `deno run --allow-net src/01.server.ts`

- import from url
- run with permissions
- pass in parameters for `PORT`

### 02.web-like

> `deno run --allow-net src/02.web-like.ts`

- event listeners
- base64
- fetch
- confirm, prompt, alert
- self === window
- wasm

Other API's that's available

- blob
- console
- FormData
- Performance
- setTimeout/Interval
- Streams
- URL
- URLSearchParams
- WebSocket

### 03.runtime

> `deno run src/03.runtime.ts`

- lifecycle
- permissions api
- location api
- workers

### 04.lint-n-check

Use task (<kbd>cmd/ctrl</kbd>+<kbd>shift</kbd>+<kbd>B</kbd>) to run, format and lint file
