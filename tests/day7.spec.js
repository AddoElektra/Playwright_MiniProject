/*name: Playwright Tests

on:

  push:

    branches: [ main ]

  pull_request:

    branches: [ main ]

jobs:

  playwright-tests:

    timeout-minutes: 60

    runs-on: ubuntu-latest

    strategy:

      fail-fast: false

      matrix:

        shardIndex: [1, 2, 3, 4]

        shardTotal: [4]

    steps:

    - uses: actions/checkout@v4

    - uses: actions/setup-node@v4

      with:

        node-version: 18

    - name: Install dependencies

      run: npm ci

    - name: Install Playwright browsers

      run: npx playwright install --with-deps



    - name: Run Playwright tests

      run: npx playwright test --shard=${{ matrix.shardIndex }}/${{ matrix.shardTotal }}



    - name: Upload blob report to GitHub Actions Artifacts

      if: ${{ !cancelled() }}

      uses: actions/upload-artifact@v4

      with:

        name: blob-report-${{ matrix.shardIndex }}

        path: blob-report

        retention-days: 1

  merge-report:

    if: ${{ !cancelled() }}

    needs: [playwright-tests]



    runs-on: ubuntu-latest

    steps:

      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4

        with:

          node-version: 18

      - name: Download blob reports from github actions artifacts

        uses: actions/download-artifact@v4

        with:

          path: blob-report

          pattern: blob-report-*

          merge-multiple: true



      - name: Merge into HTML reports

        run: npm playwright merge-reports --reporter html ./blob-report



      - name: Upload HTML Report

        uses: actions/upload-artifact@v4

        with:

          name: html-report--attempt-${{ github.run_attempt }}

          path: playwright-report

          retention-days: 10*/