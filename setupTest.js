import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import rmwcTestPolyfill from "@rmwc/base/dist/test-polyfill";
Enzyme.configure({ adapter: new Adapter() });

rmwcTestPolyfill();
