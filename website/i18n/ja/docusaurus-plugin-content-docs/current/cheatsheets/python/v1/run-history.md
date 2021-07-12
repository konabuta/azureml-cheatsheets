---
title: Run History
---

<!-- :::note
このコンテンツはお使いの言語では利用できません。
::: -->


<!-- Azure ML can supercharge your ML workloads in (at least!) two ways: -->
Azure ML は、（少なくとも！）2つの方法で ML のワークロードに対して特別な燃料供給をすることができます:

<!-- - AML Compute: Providing powerful compute resoures to train larger models -->
- AML Compute: より大きなモデルの学習を行うためのパワフルな計算リソースを提供
<!-- - Run history: Best-in-class lineage and reproducability -->
- Run history: クラス最高の系列と再現性

<!-- In this article we focus on Run History - and why you need it in your life! -->
この記事では、 Run History に焦点を当てます。そしてそれが生活必需品となる理由にも着目します！

<!-- As teams progress to running dozens, and eventually hundreds of experiments, having
some way to organize them is essential. Run History is a service that provides a number
features that quickly become essential to your ML-model builders: -->
チームが何十回、ひいては何百回と実験を行うようになると、それらを整理するための何らかの方法が不可欠になります。 Run History は、ML モデルの構築にとってすぐさまに欠かせないものとなる多くの機能を提供するサービスです。

<!-- ### Experiments and Runs -->
### Experiment と Run

<!-- When you are running dozens of experiments in multiple different projects, having a clear
way to organize and search though the results is key. Azure ML provides two concepts to help
with this: `Run`s and `Experiment`s. -->
複数の異なるプロジェクトで数十もの実験を行っている場合、結果を整理して検索するための明確な方法が重要となります。 Azure ML は、これを支援する2つの概念を提供しています。 `Run` (実行) と `Experiment` (実験) です。

<!-- #### Runs -->
#### Run
<!-- A run is a single execution of your code - usually a training script. The run has a life-cycle:
the code is prepared to be submited to Azure ML (e.g. via a ScriptRunConfig), then the code is
submitted -->
Run とは、コードの1回の実行であり、通常は学習用スクリプトです。 Run にはライフサイクルがあります。コードは Azure ML に送信するよう準備され（例えば ScriptRunConfig を介して）、それから送信されます。

<!-- Once the code is submitted to Azure ML (for example, via a `ScriptRunConfig`) a `Run` object is
created. This compute target is prepared (nodes are provisioned, containers hosting your Python
environment are fired up), the entry point script is called (`$ python run.py [args]`) and logs
start being generated: -->
一度コードが Azure ML に送信されると（例えば、 `ScriptRunConfig` を介して）、 `Run` オブジェクトが作成されます。ターゲットとなる Compute が準備され（ノードがプロビジョニングされ、 Python 環境をホストするコンテナが起動します）、エントリポイントのスクリプトが呼び出され（ `$ python run.py [args]` ）、以下の様にログの生成が開始されます:

```console
Files already downloaded and verified
epoch=1, batch= 2000: loss 2.19
epoch=1, batch= 4000: loss 1.82
epoch=1, batch= 6000: loss 1.66
...
```

<!-- You may log metrics to Azure ML with `run.log('<metric_name>', metric_value)` and monitor them in the studio: -->
`run.log('<metric_name>', metric_value)` を使用して Azure ML にメトリックを記録し、 Azure ML Studio で監視することができます:

![](img/logging-metrics.png)

<!-- The training concludes, usually some model files are saved, and the nodes are
released. -->
学習は終了し、通常はいくつかのモデルファイルが保存され、ノードが解放されます。

<!-- But the story doesn't end there. The run persists even after the nodes are returned
to Azure. You can always return, either in code or via the studio, to see a history
of your runs, all their outputs and metrics, and the exact code that was used to generate them. -->
しかし、話はそれだけでは終わりません。ノードが Azure に返却された後も、 Run は持続します。実行の履歴、すべての出力とメトリック、およびそれらを生成するために使用された正確なコードを確認するために、コード内または Azure ML Studio 経由でいつでも戻ることができます。

<!-- #### Experiments -->
#### Experiment

<!-- An Experiment is a collection of runs. All runs belongs to an Experiment. Usually
an Experiment is tied to a specific work item, for example, "Finetune Bert-Large",
and will possess a number of runs as you iterate toward this goal. -->
Experiment とは Run の集合体です。すべての Run は1つの Experiment に属します。通常、 Experiment は例えば「Bert-Large の微調整」といった特定の作業項目に関連付けられており、この目標に向かって反復することで、多数の Run を保有することになります。

<!-- ### Snapshot -->
### スナップショット

<!-- When you submit your code to run in Azure ML, a _snapshot_ is taken. This is a copy of the exact
code that ran. Think of this as version control for your experiments. Want to reproduce the
results from that experiment 2-months ago even though you've iterated on the model and the
training script in the meantime? No problem, snapshot has you covered! -->
Azure ML で実行するコードを送信すると、 _スナップショット_ が取得されます。これは、実行されたコードの正確なコピーです。これは、 Experiment のバージョン管理と考えてください。2ヶ月前の Experiment の結果を再現したいと思っても、その間にモデルやトレーニングスクリプトを繰り返し変更していたとしたら？問題ありません。スナップショットがカバーしてくれます！

<!-- You have total control of what goes into the snapshot with the `.amlignore` file. This plays
the same role as a `.gitignore` so you can efficiently manage what to include in the snapshot. -->
`.amlignore` ファイルを使えば、スナップショットに何を入れるかを完全にコントロールできます。これは `.gitignore` と同じ役割を果たすもので、スナップショットに含めるものを効率的に管理できます。

<!-- ### Metrics -->
### メトリック

<!-- As you run experiments, you track metrics - from validation loss through to GPU load. Analysing these metrics is essential to determining your best model. With Run History, these metrics are stored for all your runs. -->
実験を行う際には、検証の損失からGPUの負荷まで、各種メトリックを追跡します。これらのメトリックを分析することは、最適なモデルを決定するのに不可欠です。 Run History を使うことで、これらのメトリックが全ての Run に対して保存されます。