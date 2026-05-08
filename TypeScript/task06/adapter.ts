class OldXmlDataAPI {
  getXml(): string {
    return "<data>123</data>";
  }
}

interface IJsonDataProcessor {
  processJson(): string;
}

class XmlToJsonAdapter implements IJsonDataProcessor {
  private xmlApi: OldXmlDataAPI;

  constructor(api: OldXmlDataAPI) {
    this.xmlApi = api;
  }

  processJson(): string {
    const xml = this.xmlApi.getXml();
    return `{"data": "${xml.replace(/<[^>]*>/g, '')}"}`;
  }
}

const oldApi = new OldXmlDataAPI();
const adapter = new XmlToJsonAdapter(oldApi);
console.log(adapter.processJson());
