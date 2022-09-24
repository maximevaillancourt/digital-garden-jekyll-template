---
title: Jupyter Notebooks with Neovim
tags:
  - python
  - neovim
  - pyenv
  - pipenv
  - jupyter
---

### Introduction


Let's all agree on this: writing code and executing Jupyter Notebooks is annoying as hell in the browser. All this inefficient code navigation, mouse-clicking, searching, you name it, is not an optimal approach in the long term. To overcome this issue I looked into ways how could I improve Jupyter Notebook (Python) development/workflow and this is the result: my most recent setup on how to bring the interactive development of Jupyter Notebooks or into your favorite editor Vim/[Neovim](https://github.com/neovim/neovim).

> Note this post is mostly based on [Setting up a Neovim and pipenv based Python development environment](https://expectationmax.github.io/2018/Neovim-pipenv-based-development-environment/) and [NeoVim Notebooks](https://maxwellrules.com/misc/nvim_jupyter.html) with a few caveats :)


 This setup is powered by the following plugins:

```lua
use 'untitled-ai/jupyter_ascending.vim'
use 'bfredl/nvim-ipy'
use 'hkupty/iron.nvim'
use 'GCBallesteros/jupytext.vim'
use 'kana/vim-textobj-line'
use 'kana/vim-textobj-user'
use 'GCBallesteros/vim-textobj-hydrogen'
```

### iron.nvim

<img src="/assets/iron-vim.png"/>

Is a library and plugin that enables interactive REPLs from Neovim. It enables to send a text to the REPL via motion, text object, or visual selection.

```lua
---- IRON-REPL ----------------------------------------------------------------

local iron = require('iron')

iron.core.add_repl_definitions {
  python = {
    venv_python = {
      command =  "pipenv run ipython"
    }
  }
}

iron.core.set_config {
  preferred = {
    python = "venv_python",
  }
}

vim.cmd [[nnoremap <silent><c-v> <Plug>(iron-visual-send)]]
vim.cmd [[nnoremap <C-l> <Plug>(iron-send-line)]]
```

This configuration enables me to connect to an existing `ipykernel` when running the command from Neovim: `:IronRepl`.

#### Development

* Start the `ipykernel` from the terminal or by running `:RunPipenvKernel` from Neovim
* Start the interactive REPL by running `:IronRepl`
* Execute chunk of python code by sending to the REPL by visual selection and hitting `CTRL+V`.

The only limitation of this approach is that you can't display charts or tables.

### nvim-ipy

<img src="/assets/qt-console.png"/>

Is a Jupyter front-end for Neovim. Its utility is the same as `iron.nvim` however I use `nvim-ipy` to integrate Neovim with QT Console. Follow this [post](https://expectationmax.github.io/2018/Neovim-pipenv-based-development-environment/) by MAx on how to install QT console.

```lua
---- NVIM-IPY -----------------------------------------------------------------

vim.g.nvim_ipy_perform_mappings = 0
vim.g.ipy_celldef = '# %%'

vim.cmd [[map <silent><c-s> <Plug>(IPy-Run)]]
vim.cmd [[map <leader>rc <Plug>(IPy-RunCell)]]
```

#### Development

* Run `RunQtPipenv` which starts the QT console within the given `pipenv` environment.
* Run `ConnectToPipenvKernel`, this connects neovim with the QT console via `nvim-ipy`.
* Execute chunk of python code by sending to the REPL by visual selection and hitting `CTRL+s`.

The only advantage of the QT console is that the output is more "nicely" formated and allows to display plots. However, it has limitations when it to comes tables or DataFrames.

### Jupytex

<img src="/assets/hydrogen.png"/>

Jupytex makes it possible to transform `*.ipynb` file to `*.py` or vice-versa. When you open a Jupyter Notebook `*.ipynb` file, it is automatically converted from JSON to `*.py` through the jupytext utility, and the result is loaded into vim/neovim buffer. Upon saving, the `*.ipynb` file is updated with any modifications. `jupytext.vim` is doing all this in the background automatically.

### vim-textobj-hydrogen

The vim-textobj-hydrogen plugin enables navigation between cells. It provides two text-objects, `ah` and `ih`, and backward and forwards motion for them, `[h` and `]h` respectively - used to jump between [hydrogen](https://nteract.gitbooks.io/hydrogen/content/docs/Usage/NotebookFiles.html#notebook-export) style python notebook cells. All code cells start with `# %%` and are used to delimit the individual code and markdown blocks.

For `iron.nvim` I use these motions to jump backwards and forwards and execute each cell:

```lua
vim.cmd [[nmap ]x ctrih/^# %%<CR><CR>]]
vim.cmd [[nmap [x ctrah/^# %%<CR><CR>]]
```

For `nvim-ipy` I use the `]h` and `]h` motions to jump between cells and execute them by:

`vim.cmd [[map <leader>rc <Plug>(IPy-RunCell)]]`

### jupyter_ascending

<img src="/assets/simple_jupyter_ascending.png"/>

Jupyter Ascending syncs the state between `*.py` file and a running Jupyter `*.ipynb` notebook. Its advantage from the previous cases (running an interactive REPL in Neovim or QT Console) is that you have an up and running Jupyter Server with a notebook next to Neovim.

At the moment, it requires to name the python files that end with `.sync.py` and the Jupyter notebook with names that end with `.sync.ipynb`. So for each Jupyter notebook in JSON format, you will have to generate the python file in the hydrogen format. Fortunately `jupyter_ascending` provides a script that takes care of this:

`python -m jupyter_ascending.scripts.make_pair --base examples/test.py`

The instructions for installing and running `jupyter_ascending` are well documented on [github](https://github.com/untitled-ai/jupyter_ascending). To interact with `jupyter_ascending` from Vim/Neovim install the [jupyter_ascending.vim](https://github.com/untitled-ai/jupyter_ascending.vim) plugin. Currently, the plugin contains a minor "bug" which causes that the notebooks are not synchronized automatically - my [PR](https://github.com/untitled-ai/jupyter_ascending.vim/pull/4/commits/015eb39ffaaa80af90cdbd35bd68234b269f52c7) should fix this issue.

#### Development

- Create or rename a Jupyter notebook as `notebook_name.synced.ipynb`
- Generate a file `notebook_name.synced.py` using `jupyter_ascending` script or `jupytext`
- Start the Jupyter Notebook and the `ipykernel`
- Edit the `notebook_name.synced.py` - everytime you save it will synchronize with `notebook_name.synced.ipynb`
- Send commands to Jupyter notebook via the following mappings

```lua
---- JUPYTER ASCENDING --------------------------------------------------------

vim.cmd[[ nnoremap <silent><c-x> <Plug>JupyterExecute ]]
vim.cmd[[ nnoremap <silent><c-X> <Plug>JupyterExecuteAll ]]
```

### Auxiliary Commands

I have the following commands defined in my [`python.lua`]() config file which I have copy-pasted from [Max](https://expectationmax.github.io/2018/Neovim-pipenv-based-development-environment/) ;). With these commands, I start the `ipykernel`, lunch QT console, connect to the given kernel, and so forth.

```javascript
" Starts Qt console and connect to pipenv ipykernel
command! -nargs=0 RunQtPipenv call StartConsolePipenv('jupyter qtconsole')

" Starts Qt console and connect to an existing ipykernel
command! -nargs=0 RunQtConsole call jobstart("jupyter qtconsole --existing")

" Starts pipenv ipykernel
command! -nargs=0 RunPipenvKernel terminal /bin/bash -i -c 'pipenv run python -m ipykernel'
command! -nargs=0 RunPoetryKernel terminal /bin/bash -i -c 'poetry run python -m ipykernel'

" Connects nvim-ipy to the existing ipykernel (non-interactive)
command! -nargs=0 ConnectToPipenvKernel call ConnectToPipenvKernel()

" Connects nvim-ipy to the existing ipykernel (interactive)
command! -nargs=0 ConnectConsole terminal /bin/bash -i -c 'jupyter console --existing'
command! -nargs=0 AddFilepathToSyspath call AddFilepathToSyspath()
```

