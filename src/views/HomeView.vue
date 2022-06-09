<template>
  <div class="home">
    <div class="btn">
      <el-button type="primary" @click="generate">下载</el-button>
      <el-button type="success" @click="saveData">暂存</el-button>
      <el-button type="info" @click="loadData">读取数据</el-button>
    </div>

    <h2>实验医学中心临床检验<br />
      质量与安全管理月总结</h2>
    <h3>({{ wordData.year }}年{{ wordData.month }}月)
    </h3>
    <h4>一、上月质控存在问题及整改情况</h4>
    <h4>（一）人员管理方面</h4>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="wordData.people" :autosize="{ minRows: 10 }"
      resize="none">
    </el-input>
    <h4>（二）仪器、试剂管理方面</h4>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="wordData.equip" :autosize="{ minRows: 10 }"
      resize="none">
    </el-input>
    <h4>（三）信息、流程、实验室环境方面</h4>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="wordData.information" :autosize="{ minRows: 10 }"
      resize="none">
    </el-input>
    <h4>（四）新冠专项</h4>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="wordData.cov19" :autosize="{ minRows: 10 }"
      resize="none">
    </el-input>
    <h4>二、本月质量安全工作情况总结</h4>
    <h4>(一)医疗工作量统计</h4>
    <table border="1">
      <thead>
        <tr>
          <td></td>
          <td>生化</td>
          <td>免疫</td>
          <td>临检</td>
          <td>微生物</td>
          <td>分子诊断</td>
          <td>总计</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>本月标本总数</td>
          <td>
            <el-input v-model="wordData.shenghua['num0']" @paste.native="pasteMe($event, 'shenghua')"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.mianyi['num0']" @paste.native="pasteMe($event, 'mianyi')"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.linjian['num0']" @paste.native="pasteMe($event, 'linjian')"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.weishengwu['num0']" @paste.native="pasteMe($event, 'weishengwu')"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.fenzi['num0']" @paste.native="pasteMe($event, 'fenzi')"></el-input>
          </td>
          <td>
            {{ zongjiNum1 }}
          </td>
        </tr>
        <tr>
          <td>上月标本总数</td>
          <td>
            <el-input v-model="wordData.shenghua['num1']"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.mianyi['num1']"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.linjian['num1']"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.weishengwu['num1']"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.fenzi['num1']"></el-input>
          </td>
          <td>
            {{ zongjiNum2 }}
          </td>
        </tr>
        <tr>
          <td>本月血标本总数</td>
          <td>
            <el-input v-model="wordData.shenghua['num2']"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.mianyi['num2']"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.linjian['num2']"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.weishengwu['num2']"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.fenzi['num2']"></el-input>
          </td>
          <td>
            {{ zongjiNum3 }}
          </td>
        </tr>
        <tr>
          <td>本月体液（尿液、粪便、体液及排泄物）标本总数</td>
          <td>
            <el-input v-model="wordData.shenghua['num3']"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.mianyi['num3']"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.linjian['num3']"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.weishengwu['num3']"></el-input>
          </td>
          <td>
            <el-input v-model="wordData.fenzi['num3']"></el-input>
          </td>
          <td>
            {{ zongjiNum4 }}
          </td>
        </tr>
        <tr>
          <td>本月其他标本总数</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
    <h4>（二）检验质量指标</h4>
    <h4>1.月度质量指标统计</h4>
    <table border="1">
      <thead>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2"></td>
          <td colspan="3">生化</td>
          <td colspan="3">免疫</td>
          <td colspan="3">临检</td>
          <td colspan="3">微生物</td>
          <td colspan="3">分子诊断</td>
          <td colspan="3">总计</td>
        </tr>
        <tr>
          <td>分子</td>
          <td>分母</td>
          <td>率%</td>
          <td>分子</td>
          <td>分母</td>
          <td>率%</td>
          <td>分子</td>
          <td>分母</td>
          <td>率%</td>
          <td>分子</td>
          <td>分母</td>
          <td>率%</td>
          <td>分子</td>
          <td>分母</td>
          <td>率%</td>
          <td>分子</td>
          <td>分母</td>
          <td>率%</td>
        </tr>
        <tr>
          <td>标本标签不合格率</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num10']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num11']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num12']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num13']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num14']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count1['num15']"></el-input-number>
          </td>
          <td>
            {{count1Fenzi}}
          </td>
          <td>
            {{count1Fenmu}}
          </td>
          <td>
            {{count1Ratio}}
          </td>
        </tr>
        <tr>
          <td>抗凝标本凝集率（应＜0.0851%）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num10']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num11']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num12']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num13']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num14']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count2['num15']"></el-input-number>
          </td>
          <td>
            {{count2Fenzi}}
          </td>
          <td>
            {{count2Fenmu}}
          </td>
          <td>
            {{count2Ratio}}
          </td>
        </tr>
        <tr>
          <td>标本类型错误错误率（应＜0.0137%）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num10']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num11']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num12']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num13']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num14']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count3['num15']"></el-input-number>
          </td>
          <td>
            {{count3Fenzi}}
          </td>
          <td>
            {{count3Fenmu}}
          </td>
          <td>
            {{count3Ratio}}
          </td>
        </tr>
        <tr>
          <td>标本容器错误错误率（应＜0.0100%）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num10']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num11']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num12']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num13']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num14']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count4['num15']"></el-input-number>
          </td>
          <td>
            {{count4Fenzi}}
          </td>
          <td>
            {{count4Fenmu}}
          </td>
          <td>
            {{count4Ratio}}
          </td>
        </tr>
        <tr>
          <td>采集量错误错误率（应＜0.0216%）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num10']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num11']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num12']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num13']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num14']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count5['num15']"></el-input-number>
          </td>
          <td>
            {{count5Fenzi}}
          </td>
          <td>
            {{count5Fenmu}}
          </td>
          <td>
            {{count5Ratio}}
          </td>
        </tr>
        <tr>
          <td>标本溶血率（应＜0.0286%）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num10']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num11']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num12']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num13']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num14']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count6['num15']"></el-input-number>
          </td>
          <td>
            {{count6Fenzi}}
          </td>
          <td>
            {{count6Fenmu}}
          </td>
          <td>
            {{count6Ratio}}
          </td>
        </tr>
        <tr>
          <td>丢失率（应为0）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num10']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num11']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num12']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num13']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num14']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count7['num15']"></el-input-number>
          </td>
          <td>
            {{count7Fenzi}}
          </td>
          <td>
            {{count7Fenmu}}
          </td>
          <td>
            {{count7Ratio}}
          </td>
        </tr>
        <tr>
          <td>检验报告不正确率（应＜0.0184%）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num10']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num11']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num12']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num13']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num14']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count8['num15']"></el-input-number>
          </td>
          <td>
            {{count8Fenzi}}
          </td>
          <td>
            {{count8Fenmu}}
          </td>
          <td>
            {{count8Ratio}}
          </td>
        </tr>
        <tr>
          <td>报告召回率</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num10']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num11']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num12']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num13']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num14']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count9['num15']"></el-input-number>
          </td>
          <td>
            {{count9Fenzi}}
          </td>
          <td>
            {{count9Fenmu}}
          </td>
          <td>
            {{count9Ratio}}
          </td>
        </tr>
        <tr>
          <td>危急值通报率（应为100%）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count10['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count10['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count10['num3']"></el-input-number>
          </td>
          <td colspan="3" rowspan="2">无</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count10['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count10['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count10['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count10['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count10['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count10['num12']">
            </el-input-number>
          </td>
          <td colspan="3" rowspan="2">无</td>
          <td>
            {{count10Fenzi}}
          </td>
          <td>
            {{count10Fenmu}}
          </td>
          <td>
            {{count10Ratio}}
          </td>
        </tr>
        <tr>
          <td>危急值通报及时率（应为100%）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count11['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count11['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count11['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count11['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count11['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count11['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count11['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count11['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count11['num12']">
            </el-input-number>
          </td>
          <td>
            {{count11Fenzi}}
          </td>
          <td>
            {{count11Fenmu}}
          </td>
          <td>
            {{count11Ratio}}
          </td>
        </tr>
        <tr>
          <td>血培养污染率（应＜1.6667%）</td>
          <td colspan="9">无</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count12['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count12['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count12['num12']">
            </el-input-number>
          </td>
          <td colspan="3">无</td>
          <td>
            {{count12Fenzi}}
          </td>
          <td>
            {{count12Fenmu}}
          </td>
          <td>
            {{count12Ratio}}
          </td>
        </tr>
        <tr>
          <td>室内质控项目开展率（42.6471%）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num12']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num13']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num14']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count13['num15']">
            </el-input-number>
          </td>
          <td>
            {{count13Fenzi}}
          </td>
          <td>
            {{count13Fenmu}}
          </td>
          <td>
            {{count13Ratio}}
          </td>
        </tr>
        <tr>
          <td>室内质控失控率 </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num12']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num13']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num14']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count14['num15']">
            </el-input-number>
          </td>
          <td>
            {{count14Fenzi}}
          </td>
          <td>
            {{count14Fenmu}}
          </td>
          <td>
            {{count14Ratio}}
          </td>
        </tr>
        <tr>
          <td>定量项目室内质控覆盖率</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num12']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num13']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num14']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count15['num15']">
            </el-input-number>
          </td>
          <td>
            {{count15Fenzi}}
          </td>
          <td>
            {{count15Fenmu}}
          </td>
          <td>
            {{count15Ratio}}
          </td>
        </tr>
        <tr>
          <td>室内质控项目CV不合格率（应＜ 1.25%）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num12']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num13']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num14']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count16['num15']">
            </el-input-number>
          </td>
          <td>
            {{count16Fenzi}}
          </td>
          <td>
            {{count16Fenmu}}
          </td>
          <td>
            {{count16Ratio}}
          </td>
        </tr>
        <tr>
          <td>室间质评项目参加率（应＞83.3333% ）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num12']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num13']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num14']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count17['num15']">
            </el-input-number>
          </td>
          <td>
            {{count17Fenzi}}
          </td>
          <td>
            {{count17Fenmu}}
          </td>
          <td>
            {{count17Ratio}}
          </td>
        </tr>
        <tr>
          <td>室间质评项目不合格率（应＜2.3256 ）</td>
          <td colspan="18">年度指标</td>
        </tr>
        <tr>
          <td>实验室间比对率（应＞0.5925% ）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num12']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num13']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num14']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count19['num15']">
            </el-input-number>
          </td>
          <td>
            {{count19Fenzi}}
          </td>
          <td>
            {{count19Fenmu}}
          </td>
          <td>
            {{count19Ratio}}
          </td>
        </tr>
        <tr>
          <td>国家级室间质评项目参加率（应＞ 65.8228%）</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num1']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num2']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num3']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num4']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num5']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num6']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num7']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num8']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num9']"></el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num12']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num13']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num14']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count20['num15']">
            </el-input-number>
          </td>
          <td>
            {{count20Fenzi}}
          </td>
          <td>
            {{count20Fenmu}}
          </td>
          <td>
            {{count20Ratio}}
          </td>
        </tr>
        <tr>
          <td>国家级室间质评项目不合格率（应＜ 2.3121%）</td>
          <td colspan="18">年度指标</td>
        </tr>
        <tr>
          <td>POCT项目室间质评参加率</td>
          <td colspan="18">年度指标</td>
        </tr>
        <tr>
          <td>POCT项目室间质评合格率</td>
          <td colspan="18">年度指标</td>
        </tr>
        <tr>
          <td>检验前周转时间中位数（分钟）</td>
          <td colspan="18">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count24['num1']"></el-input-number>
          </td>
        </tr>
        <tr>
          <td>实验室内周转时间中位数（分钟）</td>
          <td colspan="18">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count25['num1']"></el-input-number>
          </td>
        </tr>
        <tr>
          <td>本月度因分析设备故障导致检验报告延迟的次数</td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count26['num1']"></el-input-number>
          </td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count26['num2']"></el-input-number>
          </td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count26['num3']"></el-input-number>
          </td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count26['num4']"></el-input-number>
          </td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count26['num5']"></el-input-number>
          </td>
          <td colspan="3">
            {{count26Fenzi}}
          </td>
        </tr>
        <tr>
          <td>本月度实验室信息系统（LIS）故障数</td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count27['num1']"></el-input-number>
          </td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count27['num2']"></el-input-number>
          </td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count27['num3']"></el-input-number>
          </td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count27['num4']"></el-input-number>
          </td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count27['num5']"></el-input-number>
          </td>
          <td colspan="3">
            {{count27Fenzi}}
          </td>
        </tr>
        <tr>
          <td>LIS系统传输准确性符合率</td>
          <td colspan="18">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count28['num1']"></el-input-number>
          </td>
        </tr>
        <tr>
          <td>医护满意度</td>
          <td colspan="18">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count29['num1']"></el-input-number>
          </td>
        </tr>
        <tr>
          <td>患者满意度</td>
          <td colspan="18">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count30['num1']"></el-input-number>
          </td>
        </tr>
        <tr>
          <td>实验室投诉数</td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count31['num1']"></el-input-number>
          </td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count31['num2']"></el-input-number>
          </td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count31['num3']"></el-input-number>
          </td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count31['num4']"></el-input-number>
          </td>
          <td colspan="3">
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count31['num5']"></el-input-number>
          </td>
          <td colspan="3">
            {{count31Fenzi}}
          </td>
        </tr>
        <tr>
          <td>血培养阳性率</td>
          <td colspan="9">无</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count32['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count32['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count32['num12']">
            </el-input-number>
          </td>
          <td colspan="3">无</td>
          <td>
            {{count32Fenzi}}
          </td>
          <td>
            {{count32Fenmu}}
          </td>
          <td>
            {{count32Ratio}}
          </td>
        </tr>
        <tr>
          <td>苛养菌分离率</td>
          <td colspan="9">无</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count33['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count33['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count33['num12']">
            </el-input-number>
          </td>
          <td colspan="3">无</td>
          <td>
            {{count33Fenzi}}
          </td>
          <td>
            {{count33Fenmu}}
          </td>
          <td>
            {{count33Ratio}}
          </td>
        </tr>
        <tr>
          <td>临床微生物标本送检率</td>
          <td colspan="9">无</td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count34['num10']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count34['num11']">
            </el-input-number>
          </td>
          <td>
            <el-input-number :controls="false" style="width:90px;" v-model="wordData.count34['num12']">
            </el-input-number>
          </td>
          <td colspan="3">无</td>
          <td>
            {{count34Fenzi}}
          </td>
          <td>
            {{count34Fenmu}}
          </td>
          <td>
            {{count34Ratio}}
          </td>
        </tr>
      </tbody>
    </table>
    <h4>（三）周转时间</h4>
    <h4>1.各组周转时间（min）</h4>
    <table border="1">
      <thead>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2"></td>
          <td colspan="2">生化</td>
          <td colspan="2">自动化免疫</td>
          <td colspan="2">三大常规</td>
          <td colspan="2">凝血</td>
        </tr>
        <tr>
          <td>中位数</td>
          <td>第90百分位</td>
          <td>中位数</td>
          <td>第90百分位</td>
          <td>中位数</td>
          <td>第90百分位</td>
          <td>中位数</td>
          <td>第90百分位</td>
        </tr>
        <tr>
          <td>该专业住院检验月标本总数</td>
          <td colspan="2"></td>
          <td colspan="2"></td>
          <td colspan="2"></td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td>该专业急诊检验月标本总数</td>
          <td colspan="2"></td>
          <td colspan="2"></td>
          <td colspan="2"></td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td>该专业门诊检验月标本总数</td>
          <td colspan="2"></td>
          <td colspan="2"></td>
          <td colspan="2"></td>
          <td colspan="2"></td>
        </tr>
        <tr>
          <td>急诊检验前周转时间</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>常规（住院）检验前周转时间</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>常规（门诊）检验前周转时间</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>急诊实验室内周转时间</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>常规（住院）实验室内周转时间</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>常规（门诊）实验室内周转时间</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h4>2.各项目周转时间</h4>
    <table border="1">
      <thead>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2"></td>
          <td colspan="4">检验前周转时间(min)</td>
          <td colspan="4">实验室内周转时间(min)</td>
        </tr>
        <tr>
          <td>本实验室规定时间</td>
          <td>月中位数</td>
          <td>月第90百分位数</td>
          <td>月标本数</td>
          <td>本实验室规定时间</td>
          <td>月中位数</td>
          <td>月第90百分位数</td>
          <td>月标本数</td>
        </tr>
        <tr>
          <td colspan="9">急诊项目</td>
        </tr>
        <tr>
          <td>血钾</td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
          <td>60</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>肌钙蛋白I或肌钙蛋白T</td>
          <td>31</td>
          <td></td>
          <td></td>
          <td></td>
          <td>120</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>白细胞计数</td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>国际标准化比值（INR）</td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
          <td>120</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>三大常规</td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>血糖</td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
          <td>120</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Na</td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
          <td>60</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Ca</td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
          <td>60</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9">门诊项目</td>
        </tr>
        <tr>
          <td>血钾</td>
          <td>88</td>
          <td></td>
          <td></td>
          <td></td>
          <td>120</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>肌钙蛋白I或肌钙蛋白T</td>
          <td>90</td>
          <td></td>
          <td></td>
          <td></td>
          <td>120</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>白细胞计数</td>
          <td>75</td>
          <td></td>
          <td></td>
          <td></td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>尿常规</td>
          <td>75</td>
          <td></td>
          <td></td>
          <td></td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>国际标准化比值（INR）</td>
          <td>74</td>
          <td></td>
          <td></td>
          <td></td>
          <td>120</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9">住院项目</td>
        </tr>
        <tr>
          <td>血钾</td>
          <td>88</td>
          <td></td>
          <td></td>
          <td></td>
          <td>120</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>丙氨酸氨基转移酶</td>
          <td>88</td>
          <td></td>
          <td></td>
          <td></td>
          <td>120</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>肌钙蛋白I或肌钙蛋白T</td>
          <td>90</td>
          <td></td>
          <td></td>
          <td></td>
          <td>120</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>促甲状腺激素</td>
          <td>90</td>
          <td></td>
          <td></td>
          <td></td>
          <td>240</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>甲胎蛋白</td>
          <td>90</td>
          <td></td>
          <td></td>
          <td></td>
          <td>240</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>白细胞计数</td>
          <td>75</td>
          <td></td>
          <td></td>
          <td></td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>尿常规</td>
          <td>75</td>
          <td></td>
          <td></td>
          <td></td>
          <td>30</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>国际标准化比值（INR）</td>
          <td>74</td>
          <td></td>
          <td></td>
          <td></td>
          <td>120</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h4>（四）设备完好率</h4>
    <table border="1">
      <thead></thead>
      <tbody>
        <tr>
          <td></td>
          <td>生化</td>
          <td>免疫</td>
          <td>临检</td>
          <td>微生物</td>
          <td>分子诊断</td>
        </tr>
        <tr>
          <td>万元以上医疗设备、仪器完好率（应≥95％）</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
        </tr>
        <tr>
          <td>大型设备安检率（应为100％）</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
        </tr>
        <tr>
          <td>急诊器械、仪器完好率（应为100％）</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
        </tr>
        <tr>
          <td>仪器日常维护保养情况</td>
          <td>良好</td>
          <td>良好</td>
          <td>良好</td>
          <td>良好</td>
          <td>良好</td>
        </tr>
      </tbody>
    </table>
    <h4>（五）传染病上报</h4>
    <table border="1">
      <thead></thead>
      <tbody>
        <tr>
          <td colspan="3">免疫</td>
          <td colspan="3">临检</td>
          <td colspan="3">微生物</td>
        </tr>
        <tr>
          <td>分子</td>
          <td>分母</td>
          <td>率%</td>
          <td>分子</td>
          <td>分母</td>
          <td>率%</td>
          <td>分子</td>
          <td>分母</td>
          <td>率%</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h4>（六）核心制度执行情况</h4>
    <table border="1">
      <thead></thead>
      <tbody>
        <tr>
          <td rowspan="3">医疗核心制度执行</td>
          <td>交接班制度执行情况：交接班制度执行较好，但交接班记录有漏签的情况。</td>
        </tr>
        <tr>
          <td>新技术准入制度执行情况：本月未开展新项目新技术。</td>
        </tr>
        <tr>
          <td>查对制度执行情况：执行较好。</td>
        </tr>
        <tr>
          <td>医疗（安全）不良事件和投诉</td>
          <td>不良事件2次。</td>
        </tr>
      </tbody>
    </table>
    <h4>二、本月主要存在问题、原因分析、整改措施</h4>
    <h4>（一）人员管理方面</h4>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="wordData.people1" :autosize="{ minRows: 10 }"
      resize="none">
    </el-input>
    <h4>（二）仪器、试剂管理方面</h4>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="wordData.equip1" :autosize="{ minRows: 10 }"
      resize="none">
    </el-input>
    <h4>（三）信息、流程、实验室环境方面</h4>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="wordData.information1" :autosize="{ minRows: 10 }"
      resize="none">
    </el-input>
    <h4>（四）新冠专项</h4>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="wordData.cov191" :autosize="{ minRows: 10 }"
      resize="none">
    </el-input>
    <h4>三、下月质控重点内容（选1-2项）</h4>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="wordData.nextMonth" :autosize="{ minRows: 10 }"
      resize="none">
    </el-input>
  </div>
</template>

<script>

import * as docxtemplater from 'docxtemplater';
import * as inspect from 'docxtemplater/js/inspect-module';
import * as PizZip from 'pizzip';
import * as pizzipUtils from 'pizzip/utils';
import * as FileSaver from 'file-saver';

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      wordData: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() == 0 ? 12 : new Date().getMonth(),
        people: '',
        equip: '',
        information: '',
        cov19: '',
        people1: '',
        equip1: '',
        information1: '',
        cov191: '',
        nextMonth: '',
        //医疗工作量统计
        shenghua: { 'num0': '', 'num1': '', 'num2': '', 'num3': '' },
        mianyi: { 'num0': '', 'num1': '', 'num2': '', 'num3': '' },
        linjian: { 'num0': '', 'num1': '', 'num2': '', 'num3': '' },
        weishengwu: { 'num0': '', 'num1': '', 'num2': '', 'num3': '' },
        fenzi: { 'num0': '', 'num1': '', 'num2': '', 'num3': '' },
        zongji: { 'num0': 0, 'num1': 0, 'num2': 0, 'num3': 0 },
        //月度质量指标统计
        count1: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count2: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count3: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count4: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count5: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count6: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count7: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count8: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count9: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count10: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count11: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count12: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count13: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count14: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count15: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count16: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count17: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count18: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count19: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count20: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count21: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count22: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count23: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count24: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count25: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count26: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count27: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count28: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count29: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count30: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count31: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count32: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count33: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count34: {
          'num0': '', 'num1': '', 'num2': '', 'num3': '', 'num4': '', 'num5': '', 'num6': '', 'num7': '', 'num8': '', 'num9': '', 'num10': '', 'num11': '', 'num12': '', 'num13': '', 'num14': '', 'num15': ''
        },
        count1zongji: {'count1Fenzi':0,'count1Fenmu':0,'count1Ratio':'0%'},
        count2zongji: { 'count2Fenzi': 0, 'count2Fenmu': 0, 'count2Ratio': '0%' },
        count3zongji: { 'count3Fenzi': 0, 'count3Fenmu': 0, 'count3Ratio': '0%' },
        count4zongji: { 'count4Fenzi': 0, 'count4Fenmu': 0, 'count4Ratio': '0%' },
        count5zongji: { 'count5Fenzi': 0, 'count5Fenmu': 0, 'count5Ratio': '0%' },
        count6zongji: { 'count6Fenzi': 0, 'count6Fenmu': 0, 'count6Ratio': '0%' },
        count7zongji: { 'count7Fenzi': 0, 'count7Fenmu': 0, 'count7Ratio': '0%' },
        count8zongji: { 'count8Fenzi': 0, 'count8Fenmu': 0, 'count8Ratio': '0%' },
        count9zongji: { 'count9Fenzi': 0, 'count9Fenmu': 0, 'count9Ratio': '0%' },
        count10zongji: { 'count10Fenzi': 0, 'count10Fenmu': 0, 'count10Ratio': '0%' },
        count11zongji: { 'count11Fenzi': 0, 'count11Fenmu': 0, 'count11Ratio': '0%' },
        count12zongji: { 'count12Fenzi': 0, 'count12Fenmu': 0, 'count12Ratio': '0%' },
        count13zongji: { 'count13Fenzi': 0, 'count13Fenmu': 0, 'count13Ratio': '0%' },
        count14zongji: { 'count14Fenzi': 0, 'count14Fenmu': 0, 'count14Ratio': '0%' },
        count15zongji: { 'count15Fenzi': 0, 'count15Fenmu': 0, 'count15Ratio': '0%' },
        count16zongji: { 'count16Fenzi': 0, 'count16Fenmu': 0, 'count16Ratio': '0%' },
        count17zongji: { 'count17Fenzi': 0, 'count17Fenmu': 0, 'count17Ratio': '0%' },
        count18zongji: { 'count18Fenzi': 0, 'count18Fenmu': 0, 'count18Ratio': '0%' },
        count19zongji: { 'count19Fenzi': 0, 'count19Fenmu': 0, 'count19Ratio': '0%' },
        count20zongji: { 'count20Fenzi': 0, 'count20Fenmu': 0, 'count20Ratio': '0%' },
        count21zongji: { 'count21Fenzi': 0, 'count21Fenmu': 0, 'count21Ratio': '0%' },
        count22zongji: { 'count22Fenzi': 0, 'count22Fenmu': 0, 'count22Ratio': '0%' },
        count23zongji: { 'count23Fenzi': 0, 'count23Fenmu': 0, 'count23Ratio': '0%' },
        count24zongji: { 'count24Fenzi': 0, 'count24Fenmu': 0, 'count24Ratio': '0%' },
        count25zongji: { 'count25Fenzi': 0, 'count25Fenmu': 0, 'count25Ratio': '0%' },
        count26zongji: { 'count26Fenzi': 0, 'count26Fenmu': 0, 'count26Ratio': '0%' },
        count27zongji: { 'count27Fenzi': 0, 'count27Fenmu': 0, 'count27Ratio': '0%' },
        count28zongji: { 'count28Fenzi': 0, 'count28Fenmu': 0, 'count28Ratio': '0%' },
        count29zongji: { 'count29Fenzi': 0, 'count29Fenmu': 0, 'count29Ratio': '0%' },
        count30zongji: { 'count30Fenzi': 0, 'count30Fenmu': 0, 'count30Ratio': '0%' },
        count31zongji: { 'count31Fenzi': 0, 'count31Fenmu': 0, 'count31Ratio': '0%' },
        count32zongji: { 'count32Fenzi': 0, 'count32Fenmu': 0, 'count32Ratio': '0%' },
        count33zongji: { 'count33Fenzi': 0, 'count33Fenmu': 0, 'count33Ratio': '0%' },
        count34zongji: { 'count34Fenzi': 0, 'count34Fenmu': 0, 'count34Ratio': '0%' },
      },

    }
  },
  computed: {
    zongjiNum1() {
      let shenghua1 = this.wordData.shenghua['num0'] ? Number(this.wordData.shenghua['num0']) : 0;
      let mianyi1 = this.wordData.mianyi['num0'] ? Number(this.wordData.mianyi['num0']) : 0;
      let linjian1 = 0;
      if (isNaN(this.wordData.linjian['num0'])) {
        try {
          let linjianStr = this.wordData.linjian['num0'].replace('（体检）', '').split('+');
          linjian1 = Number(linjianStr[0]) + Number(linjianStr[1]);
        } catch (e) {
          linjian1 = 0;
        }
      } else {
        linjian1 = Number(this.wordData.linjian['num0'])
      }

      let fenzi1 = 0;
      if (isNaN(this.wordData.fenzi['num0'])) {
        try {
          let fenziStr = this.wordData.fenzi['num0'].replace('染色体', '').split('+');
          fenzi1 = Number(fenziStr[0]) + Number(fenziStr[1]);
        } catch (e) {
          fenzi1 = 0;
        }
      } else {
        fenzi1 = Number(this.wordData.fenzi['num0'])
      }
      let weishengwu1 = this.wordData.weishengwu['num0'] ? Number(this.wordData.weishengwu['num0']) : 0;

      let zongjiN1 = shenghua1 + mianyi1 + linjian1 + weishengwu1 + fenzi1;
      this.wordData.zongji['num0'] = zongjiN1;
      return zongjiN1;
    },
    zongjiNum2() {
      let shenghua2 = this.wordData.shenghua['num1'] ? Number(this.wordData.shenghua['num1']) : 0;
      let mianyi2 = this.wordData.mianyi['num1'] ? Number(this.wordData.mianyi['num1']) : 0;
      let linjian2 = this.wordData.linjian['num1'] ? Number(this.wordData.linjian['num1']) : 0;
      let weishengwu2 = this.wordData.weishengwu['num1'] ? Number(this.wordData.weishengwu['num1']) : 0;
      let fenzi2 = 0;
      if (isNaN(this.wordData.fenzi['num1'])) {
        try {
          let fenziStr = this.wordData.fenzi['num1'].replace('染色体', '').split('+');
          fenzi2 = Number(fenziStr[0]) + Number(fenziStr[1]);
        } catch (e) {
          fenzi2 = 0;
        }
      } else {
        fenzi2 = Number(this.wordData.fenzi['num1'])
      }

      let zongjiN2 = shenghua2 + mianyi2 + linjian2 + weishengwu2 + fenzi2;
      this.wordData.zongji['num1'] = zongjiN2;
      return zongjiN2;
    },
    zongjiNum3() {
      let shenghua3 = this.wordData.shenghua['num2'] ? Number(this.wordData.shenghua['num2']) : 0;
      let mianyi3 = this.wordData.mianyi['num2'] ? Number(this.wordData.mianyi['num2']) : 0;
      let linjian3 = this.wordData.linjian['num2'] ? Number(this.wordData.linjian['num2']) : 0;
      let weishengwu3 = this.wordData.weishengwu['num2'] ? Number(this.wordData.weishengwu['num2']) : 0;
      let fenzi3 = this.wordData.fenzi['num2'] ? Number(this.wordData.fenzi['num2']) : 0;

      let zongjiN3 = shenghua3 + mianyi3 + linjian3 + weishengwu3 + fenzi3;
      this.wordData.zongji['num2'] = zongjiN3;
      return zongjiN3;
    },
    zongjiNum4() {
      let shenghua4 = this.wordData.shenghua['num3'] ? Number(this.wordData.shenghua['num3']) : 0;
      let mianyi4 = this.wordData.mianyi['num3'] ? Number(this.wordData.mianyi['num3']) : 0;
      let linjian4 = this.wordData.linjian['num3'] ? Number(this.wordData.linjian['num3']) : 0;
      let weishengwu4 = this.wordData.weishengwu['num3'] ? Number(this.wordData.weishengwu['num3']) : 0;
      let fenzi4 = this.wordData.fenzi['num3'] ? Number(this.wordData.fenzi['num3']) : 0;

      let zongjiN4 = shenghua4 + mianyi4 + linjian4 + weishengwu4 + fenzi4;
      this.wordData.zongji['num3'] = zongjiN4;
      return zongjiN4;
    },

    count1Fenzi() { 
      var num1Fenzi = this.wordData.count1['num1'] + this.wordData.count1['num4'] + this.wordData.count1['num7'] + this.wordData.count1['num10'] + this.wordData.count1['num13']
      this.wordData.count1zongji['count1Fenzi'] = num1Fenzi;
      return num1Fenzi;
    },
    count1Fenmu() {
      var num1Fenmu = this.wordData.count1['num2'] + this.wordData.count1['num5'] + this.wordData.count1['num8'] + this.wordData.count1['num11'] + this.wordData.count1['num14']
      this.wordData.count1zongji['count1Fenmu'] = num1Fenmu;
      return num1Fenmu;
    },
    count1Ratio() {
      if (this.count1Fenmu == 0) return 0;
      var r = this.count1Fenzi / this.count1Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count1zongji['count1Ratio'] = result;
      return result;
    },

    count2Fenzi() {
      var num2Fenzi = this.wordData.count2['num1'] + this.wordData.count2['num4'] + this.wordData.count2['num7'] + this.wordData.count2['num10'] + this.wordData.count2['num13']
      this.wordData.count2zongji['count2Fenzi'] = num2Fenzi;
      return num2Fenzi;
    },
    count2Fenmu() {
      var num2Fenmu = this.wordData.count2['num2'] + this.wordData.count2['num5'] + this.wordData.count2['num8'] + this.wordData.count2['num11'] + this.wordData.count2['num14']
      this.wordData.count2zongji['count2Fenmu'] = num2Fenmu;
      return num2Fenmu;
    },
    count2Ratio() {
      if (this.count2Fenmu == 0) return 0;
      var r = this.count2Fenzi / this.count2Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count2zongji['count2Ratio'] = result;
      return result;
    },

    count3Fenzi() {
      var num3Fenzi = this.wordData.count3['num1'] + this.wordData.count3['num4'] + this.wordData.count3['num7'] + this.wordData.count3['num10'] + this.wordData.count3['num13']
      this.wordData.count3zongji['count3Fenzi'] = num3Fenzi;
      return num3Fenzi;
    },
    count3Fenmu() {
      var num3Fenmu = this.wordData.count3['num2'] + this.wordData.count3['num5'] + this.wordData.count3['num8'] + this.wordData.count3['num11'] + this.wordData.count3['num14']
      this.wordData.count3zongji['count3Fenmu'] = num3Fenmu;
      return num3Fenmu;
    },
    count3Ratio() {
      if (this.count3Fenmu == 0) return 0;
      var r = this.count3Fenzi / this.count3Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count3zongji['count3Ratio'] = result;
      return result;
    },

    count4Fenzi() {
      var num4Fenzi = this.wordData.count4['num1'] + this.wordData.count4['num4'] + this.wordData.count4['num7'] + this.wordData.count4['num10'] + this.wordData.count4['num13']
      this.wordData.count4zongji['count4Fenzi'] = num4Fenzi;
      return num4Fenzi;
    },
    count4Fenmu() {
      var num4Fenmu = this.wordData.count4['num2'] + this.wordData.count4['num5'] + this.wordData.count4['num8'] + this.wordData.count4['num11'] + this.wordData.count4['num14']
      this.wordData.count4zongji['count4Fenmu'] = num4Fenmu;
      return num4Fenmu;
    },
    count4Ratio() {
      if (this.count4Fenmu == 0) return 0;
      var r = this.count4Fenzi / this.count4Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count4zongji['count4Ratio'] = result;
      return result;
    },

    count5Fenzi() {
      var num5Fenzi = this.wordData.count5['num1'] + this.wordData.count5['num4'] + this.wordData.count5['num7'] + this.wordData.count5['num10'] + this.wordData.count5['num13']
      this.wordData.count5zongji['count5Fenzi'] = num5Fenzi;
      return num5Fenzi;
    },
    count5Fenmu() {
      var num5Fenmu = this.wordData.count5['num2'] + this.wordData.count5['num5'] + this.wordData.count5['num8'] + this.wordData.count5['num11'] + this.wordData.count5['num14']
      this.wordData.count5zongji['count5Fenmu'] = num5Fenmu;
      return num5Fenmu;
    },
    count5Ratio() {
      if (this.count5Fenmu == 0) return 0;
      var r = this.count5Fenzi / this.count5Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count5zongji['count5Ratio'] = result;
      return result;
    },

    count6Fenzi() {
      var num6Fenzi = this.wordData.count6['num1'] + this.wordData.count6['num4'] + this.wordData.count6['num7'] + this.wordData.count6['num10'] + this.wordData.count6['num13']
      this.wordData.count6zongji['count6Fenzi'] = num6Fenzi;
      return num6Fenzi;
    },
    count6Fenmu() {
      var num6Fenmu = this.wordData.count6['num2'] + this.wordData.count6['num5'] + this.wordData.count6['num8'] + this.wordData.count6['num11'] + this.wordData.count6['num14']
      this.wordData.count6zongji['count6Fenmu'] = num6Fenmu;
      return num6Fenmu;
    },
    count6Ratio() {
      if (this.count6Fenmu == 0) return 0;
      var r = this.count6Fenzi / this.count6Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count6zongji['count6Ratio'] = result;
      return result;
    },

    count7Fenzi() {
      var num7Fenzi = this.wordData.count7['num1'] + this.wordData.count7['num4'] + this.wordData.count7['num7'] + this.wordData.count7['num10'] + this.wordData.count7['num13']
      this.wordData.count7zongji['count7Fenzi'] = num7Fenzi;
      return num7Fenzi;
    },
    count7Fenmu() {
      var num7Fenmu = this.wordData.count7['num2'] + this.wordData.count7['num5'] + this.wordData.count7['num8'] + this.wordData.count7['num11'] + this.wordData.count7['num14']
      this.wordData.count7zongji['count7Fenmu'] = num7Fenmu;
      return num7Fenmu;
    },
    count7Ratio() {
      if (this.count7Fenmu == 0) return 0;
      var r = this.count7Fenzi / this.count7Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count7zongji['count7Ratio'] = result;
      return result;
    },

    count8Fenzi() {
      var num8Fenzi = this.wordData.count8['num1'] + this.wordData.count8['num4'] + this.wordData.count8['num7'] + this.wordData.count8['num10'] + this.wordData.count8['num13']
      this.wordData.count8zongji['count8Fenzi'] = num8Fenzi;
      return num8Fenzi;
    },
    count8Fenmu() {
      var num8Fenmu = this.wordData.count8['num2'] + this.wordData.count8['num5'] + this.wordData.count8['num8'] + this.wordData.count8['num11'] + this.wordData.count8['num14']
      this.wordData.count8zongji['count8Fenmu'] = num8Fenmu;
      return num8Fenmu;
    },
    count8Ratio() {
      if (this.count8Fenmu == 0) return 0;
      var r = this.count8Fenzi / this.count8Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count8zongji['count8Ratio'] = result;
      return result;
    },

    count9Fenzi() {
      var num9Fenzi = this.wordData.count9['num1'] + this.wordData.count9['num4'] + this.wordData.count9['num7'] + this.wordData.count9['num10'] + this.wordData.count9['num13']
      this.wordData.count9zongji['count9Fenzi'] = num9Fenzi;
      return num9Fenzi;
    },
    count9Fenmu() {
      var num9Fenmu = this.wordData.count9['num2'] + this.wordData.count9['num5'] + this.wordData.count9['num8'] + this.wordData.count9['num11'] + this.wordData.count9['num14']
      this.wordData.count9zongji['count9Fenmu'] = num9Fenmu;
      return num9Fenmu;
    },
    count9Ratio() {
      if (this.count9Fenmu == 0) return 0;
      var r = this.count9Fenzi / this.count9Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count9zongji['count9Ratio'] = result;
      return result;
    },

    count10Fenzi() {
      var num10Fenzi = this.wordData.count10['num1'] + this.wordData.count10['num7'] + this.wordData.count10['num10']
      this.wordData.count10zongji['count10Fenzi'] = num10Fenzi;
      return num10Fenzi;
    },
    count10Fenmu() {
      var num10Fenmu = this.wordData.count10['num2'] + this.wordData.count10['num8'] + this.wordData.count10['num11']
      this.wordData.count10zongji['count10Fenmu'] = num10Fenmu;
      return num10Fenmu;
    },
    count10Ratio() {
      if (this.count10Fenmu == 0) return 0;
      var r = this.count10Fenzi / this.count10Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count10zongji['count10Ratio'] = result;
      return result;
    },

    count11Fenzi() {
      var num11Fenzi = this.wordData.count11['num1'] + this.wordData.count11['num7'] + this.wordData.count11['num10']
      this.wordData.count11zongji['count11Fenzi'] = num11Fenzi;
      return num11Fenzi;
    },
    count11Fenmu() {
      var num11Fenmu = this.wordData.count11['num2'] + this.wordData.count11['num8'] + this.wordData.count11['num11']
      this.wordData.count11zongji['count11Fenmu'] = num11Fenmu;
      return num11Fenmu;
    },
    count11Ratio() {
      if (this.count11Fenmu == 0) return 0;
      var r = this.count11Fenzi / this.count11Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count11zongji['count11Ratio'] = result;
      return result;
    },

    count12Fenzi() {
      var num12Fenzi = this.wordData.count12['num10']
      this.wordData.count12zongji['count12Fenzi'] = num12Fenzi;
      return num12Fenzi;
    },
    count12Fenmu() {
      var num12Fenmu = this.wordData.count12['num11']
      this.wordData.count12zongji['count12Fenmu'] = num12Fenmu;
      return num12Fenmu;
    },
    count12Ratio() {
      if (this.count12Fenmu == 0) return 0;
      var r = this.count12Fenzi / this.count12Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count12zongji['count12Ratio'] = result;
      return result;
    },

    count13Fenzi() {
      var num13Fenzi = this.wordData.count13['num1'] + this.wordData.count13['num4'] + this.wordData.count13['num7'] + this.wordData.count13['num10'] + this.wordData.count13['num13']
      this.wordData.count13zongji['count13Fenzi'] = num13Fenzi;
      return num13Fenzi;
    },
    count13Fenmu() {
      var num13Fenmu = this.wordData.count13['num2'] + this.wordData.count13['num5'] + this.wordData.count13['num8'] + this.wordData.count13['num11'] + this.wordData.count13['num14']
      this.wordData.count13zongji['count13Fenmu'] = num13Fenmu;
      return num13Fenmu;
    },
    count13Ratio() {
      if (this.count13Fenmu == 0) return 0;
      var r = this.count13Fenzi / this.count13Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count13zongji['count13Ratio'] = result;
      return result;
    },

    count14Fenzi() {
      var num14Fenzi = this.wordData.count14['num1'] + this.wordData.count14['num4'] + this.wordData.count14['num7'] + this.wordData.count14['num10'] + this.wordData.count14['num13']
      this.wordData.count14zongji['count14Fenzi'] = num14Fenzi;
      return num14Fenzi;
    },
    count14Fenmu() {
      var num14Fenmu = this.wordData.count14['num2'] + this.wordData.count14['num5'] + this.wordData.count14['num8'] + this.wordData.count14['num11'] + this.wordData.count14['num14']
      this.wordData.count14zongji['count14Fenmu'] = num14Fenmu;
      return num14Fenmu;
    },
    count14Ratio() {
      if (this.count14Fenmu == 0) return 0;
      var r = this.count14Fenzi / this.count14Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count14zongji['count14Ratio'] = result;
      return result;
    },

    count15Fenzi() {
      var num15Fenzi = this.wordData.count15['num1'] + this.wordData.count15['num4'] + this.wordData.count15['num7'] + this.wordData.count15['num10'] + this.wordData.count15['num13']
      this.wordData.count15zongji['count15Fenzi'] = num15Fenzi;
      return num15Fenzi;
    },
    count15Fenmu() {
      var num15Fenmu = this.wordData.count15['num2'] + this.wordData.count15['num5'] + this.wordData.count15['num8'] + this.wordData.count15['num11'] + this.wordData.count15['num14']
      this.wordData.count15zongji['count15Fenmu'] = num15Fenmu;
      return num15Fenmu;
    },
    count15Ratio() {
      if (this.count15Fenmu == 0) return 0;
      var r = this.count15Fenzi / this.count15Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count15zongji['count15Ratio'] = result;
      return result;
    },

    count16Fenzi() {
      var num16Fenzi = this.wordData.count16['num1'] + this.wordData.count16['num4'] + this.wordData.count16['num7'] + this.wordData.count16['num10'] + this.wordData.count16['num13']
      this.wordData.count16zongji['count16Fenzi'] = num16Fenzi;
      return num16Fenzi;
    },
    count16Fenmu() {
      var num16Fenmu = this.wordData.count16['num2'] + this.wordData.count16['num5'] + this.wordData.count16['num8'] + this.wordData.count16['num11'] + this.wordData.count16['num14']
      this.wordData.count16zongji['count16Fenmu'] = num16Fenmu;
      return num16Fenmu;
    },
    count16Ratio() {
      if (this.count16Fenmu == 0) return 0;
      var r = this.count16Fenzi / this.count16Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count16zongji['count16Ratio'] = result;
      return result;
    },

    count17Fenzi() {
      var num17Fenzi = this.wordData.count17['num1'] + this.wordData.count17['num4'] + this.wordData.count17['num7'] + this.wordData.count17['num10'] + this.wordData.count17['num13']
      this.wordData.count17zongji['count17Fenzi'] = num17Fenzi;
      return num17Fenzi;
    },
    count17Fenmu() {
      var num17Fenmu = this.wordData.count17['num2'] + this.wordData.count17['num5'] + this.wordData.count17['num8'] + this.wordData.count17['num11'] + this.wordData.count17['num14']
      this.wordData.count17zongji['count17Fenmu'] = num17Fenmu;
      return num17Fenmu;
    },
    count17Ratio() {
      if (this.count17Fenmu == 0) return 0;
      var r = this.count17Fenzi / this.count17Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count17zongji['count17Ratio'] = result;
      return result;
    },

    // count18Fenzi() {
    //   return 0;
    // },
    // count18Fenmu() {
    //   return 0;
    // },
    // count18Ratio() {
    //   return '0%';
    // },

    count19Fenzi() {
      var num19Fenzi = this.wordData.count19['num1'] + this.wordData.count19['num4'] + this.wordData.count19['num7'] + this.wordData.count19['num10'] + this.wordData.count19['num13']
      this.wordData.count19zongji['count19Fenzi'] = num19Fenzi;
      return num19Fenzi;
    },
    count19Fenmu() {
      var num19Fenmu = this.wordData.count19['num2'] + this.wordData.count19['num5'] + this.wordData.count19['num8'] + this.wordData.count19['num11'] + this.wordData.count19['num14']
      this.wordData.count19zongji['count19Fenmu'] = num19Fenmu;
      return num19Fenmu;
    },
    count19Ratio() {
      if (this.count19Fenmu == 0) return 0;
      var r = this.count19Fenzi / this.count19Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count19zongji['count19Ratio'] = result;
      return result;
    },

    count20Fenzi() {
      var num20Fenzi = this.wordData.count20['num1'] + this.wordData.count20['num4'] + this.wordData.count20['num7'] + this.wordData.count20['num10'] + this.wordData.count20['num13']
      this.wordData.count20zongji['count20Fenzi'] = num20Fenzi;
      return num20Fenzi;
    },
    count20Fenmu() {
      var num20Fenmu = this.wordData.count20['num2'] + this.wordData.count20['num5'] + this.wordData.count20['num8'] + this.wordData.count20['num11'] + this.wordData.count20['num14']
      this.wordData.count20zongji['count20Fenmu'] = num20Fenmu;
      return num20Fenmu;
    },
    count20Ratio() {
      if (this.count20Fenmu == 0) return 0;
      var r = this.count20Fenzi / this.count20Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count20zongji['count20Ratio'] = result;
      return result;
    },

    // count21Fenzi() {
    //   return 0;
    // },
    // count21Fenmu() {
    //   return 0;
    // },
    // count21Ratio() {
    //   return '0%';
    // },

    // count22Fenzi() {
    //   return 0;
    // },
    // count22Fenmu() {
    //   return 0;
    // },
    // count22Ratio() {
    //   return '0%';
    // },

    // count23Fenzi() {
    //   return 0;
    // },
    // count23Fenmu() {
    //   return 0;
    // },
    // count23Ratio() {
    //   return '0%';
    // },

    // count24Fenzi() {
    //   return 0;
    // },
    // count24Fenmu() {
    //   return 0;
    // },
    // count24Ratio() {
    //   return '0%';
    // },

    // count25Fenzi() {
    //   return 0;
    // },
    // count25Fenmu() {
    //   return 0;
    // },
    // count25Ratio() {
    //   return '0%';
    // },

    count26Fenzi() {
      var num26Fenzi = this.wordData.count26['num1'] + this.wordData.count26['num2'] + this.wordData.count26['num3'] + this.wordData.count26['num4'] + this.wordData.count26['num5']
      this.wordData.count26zongji['count26Fenzi'] = num26Fenzi;
      return num26Fenzi;
    },
    // count26Fenmu() {
    //   return 0;
    // },
    // count26Ratio() {
    //   return '0%';
    // },

    count27Fenzi() {
      var num27Fenzi = this.wordData.count27['num1'] + this.wordData.count27['num2'] + this.wordData.count27['num3'] + this.wordData.count27['num4'] + this.wordData.count27['num5']
      this.wordData.count27zongji['count27Fenzi'] = num27Fenzi;
      return num27Fenzi;
    },
    // count27Fenmu() {
    //   return 0;
    // },
    // count27Ratio() {
    //   return '0%';
    // },

    // count28Fenzi() {
    //   return 0;
    // },
    // count28Fenmu() {
    //   return 0;
    // },
    // count28Ratio() {
    //   return '0%';
    // },

    // count29Fenzi() {
    //   return 0;
    // },
    // count29Fenmu() {
    //   return 0;
    // },
    // count29Ratio() {
    //   return '0%';
    // },

    // count30Fenzi() {
    //   return 0;
    // },
    // count30Fenmu() {
    //   return 0;
    // },
    // count30Ratio() {
    //   return '0%';
    // },

    count31Fenzi() {
      var num31Fenzi = this.wordData.count31['num1'] + this.wordData.count31['num2'] + this.wordData.count31['num3'] + this.wordData.count31['num4'] + this.wordData.count31['num5']
      this.wordData.count31zongji['count31Fenzi'] = num31Fenzi;
      return num31Fenzi;
    },
    // count31Fenmu() {
    //   return 0;
    // },
    // count31Ratio() {
    //   return '0%';
    // },

    count32Fenzi() {
      var num32Fenzi = this.wordData.count32['num10']
      this.wordData.count32zongji['count32Fenzi'] = num32Fenzi;
      return num32Fenzi;
    },
    count32Fenmu() {
      var num32Fenmu = this.wordData.count32['num11']
      this.wordData.count32zongji['count32Fenmu'] = num32Fenmu;
      return num32Fenmu;
    },
    count32Ratio() {
      if (this.count32Fenmu == 0) return 0;
      var r = this.count32Fenzi / this.count32Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count32zongji['count32Ratio'] = result;
      return result;
    },

    count33Fenzi() {
      var num33Fenzi = this.wordData.count33['num10']
      this.wordData.count33zongji['count33Fenzi'] = num33Fenzi;
      return num33Fenzi;
    },
    count33Fenmu() {
      var num33Fenmu = this.wordData.count33['num11']
      this.wordData.count33zongji['count33Fenmu'] = num33Fenmu;
      return num33Fenmu;
    },
    count33Ratio() {
      if (this.count33Fenmu == 0) return 0;
      var r = this.count33Fenzi / this.count33Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count33zongji['count33Ratio'] = result;
      return result;
    },

    count34Fenzi() {
      var num34Fenzi = this.wordData.count34['num10']
      this.wordData.count34zongji['count34Fenzi'] = num34Fenzi;
      return num34Fenzi;
    },
    count34Fenmu() {
      var num34Fenmu = this.wordData.count34['num11']
      this.wordData.count34zongji['count34Fenmu'] = num34Fenmu;
      return num34Fenmu;
    },
    count34Ratio() {
      if (this.count34Fenmu == 0) return 0;
      var r = this.count34Fenzi / this.count34Fenmu * 100;
      var result = r.toFixed(6) + '';
      this.wordData.count34zongji['count34Ratio'] = result;
      return result;
    },
  },
  methods: {
    saveData() { 
      window.localStorage.setItem("wordData", JSON.stringify(this.wordData));
      this.$message({
        message: '暂存成功',
        type: 'success'
      });
    },
    loadData() {
      this.wordData = JSON.parse(window.localStorage.getItem("wordData")) 
      this.$message({
        message: '读取数据成功',
        type: 'success'
      }); 
    },
    pasteMe(e, type) {
      let source = e.clipboardData.getData("Text");
      // this.wordData[type] = {};
      //获得每行数据
      let rows = source.split("\r\n");

      for (var i = 0; i < rows.length; i++) {
        this.wordData[type]['num' + i] = rows[i];
      }
      // this.wordData[type] = rows;
      console.log(this.wordData);

      //阻止粘贴行为，避免将剪贴板的数据粘贴到文本框中
      e.preventDefault();
    },
    // word导出 - 编译
    loadFile(url, callback) {
      pizzipUtils.getBinaryContent(url, callback);
    },
    // word导出 - 存储数据
    wordSetData() {
      console.log(this.wordData);
      // this.wordData = {} // word数据初始化
      // ... // 这里把相应页面数据塞进去
    },
    // word导出 - 生成word文件
    generate() {
      var expressions = require('angular-expressions')
      var angularParser = function (tag) {
        var expr = expressions.compile(tag);
        return { get: expr };
      }
      this.wordSetData()
      // 下面这段代码是官网给的代码，除了loadFile的模板文件路径，其他什么都没必要动。只要文件路径对了，就可以成功导出。
      // 而如果模板里有图片，则需要多加载一个图片模块
      // 不过注意如果模板里的占位符格式写错，也可能报错导出失败
      var that = this;
      this.loadFile("temp.docx", function (error, content) {
        if (error) {
          throw error
        };
        var zip = new PizZip(content);
        let doc = new docxtemplater(zip, { linebreaks: true, parser: angularParser });
        // 有图片的话,需加载图片处理模块
        // doc.attachModule(imageModule);
        // doc.loadZip(zip);
        doc.setData({
          ...that.wordData
        });
        try {
          doc.render()
        } catch (error) {
          var e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
          }
          console.log(JSON.stringify({
            error: e
          }));
          throw error;
        }
        var out = doc.getZip().generate({
          type: "blob",
          mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }) //Output the document using Data-URI
        FileSaver.saveAs(out, that.wordData.year + '年' + that.wordData.month + '月实验医学中心质控会议月总结.docx')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  border: 1px solid black;
  padding: 10px;
  box-sizing: border-box;

  h4,
  h5 {
    text-align: left;
  }
}

.btn {
  position: fixed;
  z-index: 999;
  right: 25%;
}

table {
  width: 100%;
  border: 1px solid black;
  text-align: center;
  border-spacing: 0;
  border-collapse: collapse;
}
</style>
