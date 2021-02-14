import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

export default {
    configure(): void {
        chai.config.includeStack = true;
        chai.use(chaiAsPromised);
    },
    expect: chai.expect,
};
