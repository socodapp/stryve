import * as contracts from "truffle-contract";
import {web3Injected, currentProvider, activeUser} from "./metamaskUtils";

const definition = require('./contracts/SocialCommitment');
const ERC20Definition = require('./contracts/SampleERC20');

const DAI_ROPSTEN = '0xaD6D458402F60fD3Bd25163575031ACDce07538D';

export const isReferee = (addr) => {
    if (web3Injected()) {
        const Commitment = contracts(definition);
        Commitment.setProvider(currentProvider());
        return Commitment.at(addr)
            .then(contract => contract.referee.call())
            .then(referee => referee.toLowerCase() === activeUser().toLowerCase())
    }
    return Promise.resolve(false);
};

// Step 1 in a pledge
export const assignDaiToContract = (addr, amount) => {
    if (web3Injected()) {
        const DAI = contracts(ERC20Definition);
        DAI.setProvider(currentProvider());
        DAI.at(DAI_ROPSTEN)
            .then(contract => contract.approve(addr, amount, {from: activeUser()}))
    }
};

// Step 2 in a pledge
export const transferDaiToContract = (addr) => {
    if (web3Injected()) {
        const Commitment = contracts(definition);
        Commitment.setProvider(currentProvider());
        return Commitment.at(addr)
            .then(contract => contract.pledge({from: activeUser()}))
    }
};

// Can only be called by the referee
export const finalize = (addr, success) => {
    if (web3Injected()) {
        const Commitment = contracts(definition);
        Commitment.setProvider(currentProvider());
        return Commitment.at(addr)
            .then(contract => success ?
                contract.finalizeSucceed({from: activeUser()}) :
                contract.finalizeFail({from: activeUser()})
            )
    }
};

export const withdraw = (addr) => {
    if (web3Injected()) {
        const Commitment = contracts(definition);
        Commitment.setProvider(currentProvider());
        return Commitment.at(addr)
            .then(contract => contract.withdraw({from: activeUser()}))
    }
};
