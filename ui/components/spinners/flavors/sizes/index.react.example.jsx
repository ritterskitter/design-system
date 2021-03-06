/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import classNames from 'classnames';
import { SpinnerContainer } from 'ui/components/spinners/flavors/containers/index.react.example';
import { Spinner } from 'ui/components/spinners/flavors/containers/index.react.example';

//////////////////////////////////////////////
// Partials
//////////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" style={{height: '6.25rem'}}>
    {props.children}
  </div>;


//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'x-small',
    label: 'X-small',
    description: 'The extra small spinner can be positioned over the end of an input to indicate loading.',
    element:
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner--x-small" />
        </SpinnerContainer>
      </Demo>
  },
  {
    id: 'small',
    label: 'Small',
    element:
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner--small" />
        </SpinnerContainer>
      </Demo>
  },
  {
    id: 'medium',
    label: 'Medium',
    element:
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner--medium" />
        </SpinnerContainer>
      </Demo>
  },
  {
    id: 'large',
    label: 'Large',
    element:
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner--large" />
        </SpinnerContainer>
      </Demo>
  }
];
